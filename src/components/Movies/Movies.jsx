import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import filmsfilter from '../../utils/filmsFilter';
import Preloader from '../Preloader/Preloader';

export default function Movies() {
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [filmsToRender, setFilmsToRender] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [error, setError] = useState(false);

  function onSearch({ name }) {
    setPreloaderVisible(true)
    moviesApi.getMovies()
      .then((res) => { setError(false); setFilmsToRender(filmsfilter(res, name, isShort)) })
      .catch((err) => { console.log(err); setError(true) })
      .finally(() => {
        setPreloaderVisible(false);
      })
  }

  function onCheck() {
    setIsShort(prev => !prev);
  }

  return (
    <>
      <SearchForm onSearch={onSearch} isShort={isShort} onCheckboxClick={onCheck}/>
      <section className="movies" aria-label='Фильмы'>
        {preloaderVisible ? <Preloader /> :
          <>
            {error && <p className='movies__error'>
              Во время запроса произошла ошибка.<br />
              Возможно, проблема с соединением или сервер недоступен.<br />
              Подождите немного и попробуйте ещё раз</p>}
            {!error && <MoviesCardList movies={filmsToRender} />}
          </>}
      </section>
    </>
  )
}
