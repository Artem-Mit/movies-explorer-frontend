import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import filmsfilter from '../../utils/filmsFilter';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';


export default function SavedMovies() {
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPreloaderVisible(true)
    mainApi.getSavedMovies()
      .then((res) => {setError(false); setMoviesToRender(res)})
      .catch(() => setError(true))
      .finally(() => setPreloaderVisible(false))
  }, [])

  function onSearch({ name }) {
    setMoviesToRender(filmsfilter(moviesToRender, name, isShort))
  }

  function onCheck() {
    setIsShort(prev => !prev);
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
            {!error && <MoviesCardList movies={moviesToRender} />}
          </>}
      </section>
    </>
  )
}
