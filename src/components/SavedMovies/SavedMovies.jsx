import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import filmsfilter from '../../utils/filmsFilter';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { NOT_FOUND_ERROR_CODE } from '../../utils/constants';


export default function SavedMovies() {
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPreloaderVisible(true)
    mainApi.getSavedMovies()
      .then((res) => { setError(false); setMoviesToRender(res) })
      .catch((err) => {
        if (err === NOT_FOUND_ERROR_CODE) {
          return;
        }
        setError(true);
      })
      .finally(() => setPreloaderVisible(false))
  }, [])

  function onSearch({ name }) {
    setMoviesToRender(filmsfilter(moviesToRender, name, isShort))
  }

  function onCheck() {
    setIsShort(prev => !prev);
  }

  function deleteSavedMovie(movie) {
    mainApi.deleteMovieFromFavourite(movie._id)
      .then(() => {
        const newMoviesList = moviesToRender.filter((film) => movie._id !== film._id);
        setMoviesToRender(newMoviesList);
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <SearchForm onSearch={onSearch} isShort={isShort} onCheckboxClick={onCheck} />
      <section className='saved-movies' aria-label='Сохраненные фильмы' >
        {preloaderVisible ? <Preloader /> :
          <>
            {error && <p className='saved-movies__error'>
              Во время запроса произошла ошибка.<br />
              Возможно, проблема с соединением или сервер недоступен.<br />
              Подождите немного и попробуйте ещё раз</p>}
            {!error && <MoviesCardList movies={moviesToRender} deleteSavedMovie={deleteSavedMovie}/>}
          </>}
      </section>
    </>
  )
}
