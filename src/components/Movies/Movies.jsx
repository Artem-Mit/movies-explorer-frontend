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
  const [error, setError] = useState(false);

  function onSearch({ value }) {
    setPreloaderVisible(true)
    moviesApi.getMovies()
      .then((res) => { setError(false); setFilmsToRender(filmsfilter(res, value)) })
      .catch((err) => { console.log(err); setError(true) })
      .finally(() => {
        setPreloaderVisible(false);
      })
  }

  console.log(filmsToRender)

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <section className="movies" aria-label='Фильмы'>
        {preloaderVisible ? <Preloader /> :
          <>
            {error && <p className='movies__error'>
              Во время запроса произошла ошибка.<br />
              Возможно, проблема с соединением или сервер недоступен.<br />
              Подождите немного и попробуйте ещё раз</p>}
            {!error && <MoviesCardList films={filmsToRender} />}
          </>}
      </section>
    </>
  )
}
