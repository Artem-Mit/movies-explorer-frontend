import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import filmsfilter from '../../utils/filmsFilter';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';

export default function Movies() {
  const [preloaderVisible, setPreloaderVisible] = useState(false);
  const [filmsToRender, setFilmsToRender] = useState([]);
  const [error, setError] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const name = sessionStorage.getItem('movieName');
    const shortMovie = JSON.parse(sessionStorage.getItem('shortFilm'));
    if (name) {
      setPreloaderVisible(true)
      mainApi.getSavedMovies()
        .then((res) => {
          setError(false);
          setSavedMovies(res)
        })
        .catch((err) => { console.log(err); setError(true) });

      moviesApi.getMovies()
        .then((res) => {
          setError(false);
          setFilmsToRender(filmsfilter(res, name, shortMovie));
        })
        .catch((err) => { console.log(err); setError(true) })
        .finally(() => {
          setPreloaderVisible(false);
        })
    }
  }, [])


  function onSearch({ name, checked }) {
    sessionStorage.clear()
    setPreloaderVisible(true)
    mainApi.getSavedMovies()
      .then((res) => {
        setError(false);
        setSavedMovies(res)
      })
      .catch((err) => { console.log(err); setError(true) });

    moviesApi.getMovies()
      .then((res) => {
        setError(false);
        setFilmsToRender(filmsfilter(res, name, checked))
      })
      .catch((err) => { console.log(err); setError(true) })
      .finally(() => {
        setPreloaderVisible(false);
      })
    sessionStorage.setItem('movieName', name);
    sessionStorage.setItem('shortFilm', checked);
  }

  function addMovieToFavourite(movie) {
    mainApi.addMovieToFavourite(movie)
      .then((res) => setSavedMovies(prev => [...prev, res]))
      .then(() => setFilmsToRender(prev => [...prev]))
      .catch(err => console.log(err))
  }

  function removeMovieFromFavourite(movie) {
    const movieToRemove = savedMovies.find((savedMovie) => movie.id === savedMovie.movieId)
    mainApi.deleteMovieFromFavourite(movieToRemove._id)
      .then((res) => {
        setFilmsToRender(prev => [...prev]);
        setSavedMovies(prev => prev.filter((savedMovie) => savedMovie._id !== res._id));
      })
      .catch(err => console.log(err))
  }


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
            {!error &&
              <MoviesCardList
                movies={filmsToRender}
                savedMovies={savedMovies}
                addMovieToFavourite={addMovieToFavourite}
                removeMovieFromFavourite={removeMovieFromFavourite}
              />}
          </>}
      </section>
    </>
  )
}
