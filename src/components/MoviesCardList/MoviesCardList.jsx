import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { eightMoviesPerPage, fiveMoviesPerPage, twelveMoviesPerPage } from '../../utils/constants';


export default function MoviesCardList({ movies, savedMovies, deleteSavedMovie, addMovieToFavourite, removeMovieFromFavourite }) {
  const location = useLocation().pathname;
  const { width } = useWindowDimensions();
  const [moviesOnPage, setMoviesOnPage] = useState(movies.slice(0, setMoviesPerPage()).length);

  function setMoviesPerPage() {
    if (width <= 550) {
      return fiveMoviesPerPage;
    }
    if (width <= 768) {
      return eightMoviesPerPage;
    }
    if (width > 1280 || width <= 1280) {
      return twelveMoviesPerPage;
    }
  }

  function loadMore() {
    if (width <= 550) {
      return setMoviesOnPage(numberOfFilmsPerPage => numberOfFilmsPerPage + 1);
    }
    if (width <= 768) {
      return setMoviesOnPage(numberOfFilmsPerPage => numberOfFilmsPerPage + 2);
    }
    if (width > 1280 || width <= 1280) {
      return setMoviesOnPage(numberOfFilmsPerPage => numberOfFilmsPerPage + 3);
    }
  }

  return (
    <div className='moviesCardList'>
      {!movies.length && <p className='moviesCardList__notFoundText'>Фильмы не найдены</p>}
      {movies.length &&
        <div className='moviesCardList__cards'>
          {movies.slice(0, moviesOnPage).map((movie) =>
            <MoviesCard
              removeMovieFromFavourite={removeMovieFromFavourite}
              addMovieToFavourite={addMovieToFavourite}
              deleteSavedMovie={deleteSavedMovie}
              savedMovies={savedMovies}
              key={movie.id || movie._id}
              movie={movie} />
          )}
        </div>}
      {location !== '/saved-movies' &&
        (movies.length > moviesOnPage &&
          <div className='moviesCardList__button' onClick={loadMore}>
            Еще
          </div>
        )}
    </div>
  )
}
