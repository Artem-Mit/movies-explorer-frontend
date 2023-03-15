import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowDimensions from '../../hooks/useWindowDimensions';


export default function MoviesCardList({ movies }) {
  const { width } = useWindowDimensions();
  const [moviesOnPage, setMoviesOnPage] = useState(movies.slice(0, moviesPerPage()).length);

  function moviesPerPage() {
    if (width <= 550) {
      return 5
    }
    if (width <= 768) {
      return 8
    }
    if (width > 1280 || width <= 1280) {
      return 12
    }
  }


  function loadMore() {
    if (width <= 550) {
      return setMoviesOnPage(prev => prev + 1);
    }
    if (width <= 768) {
      return setMoviesOnPage(prev => prev + 2);
    }
    if (width > 1280 || width <= 1280) {
      return setMoviesOnPage(prev => prev + 3);
    }
  }

  return (
    <div className='moviesCardList'>
      {movies.length === 0 && <p className='moviesCardList__notFoundText'>Фильмы не найдены</p>}
      {movies.length > 0 &&
        <div className='moviesCardList__cards'>
          {movies.slice(0, moviesOnPage).map((movie) =>
            <MoviesCard
              key={movie.id}
              movie={movie} />
          )}
        </div>}
      {!(movies.length === moviesOnPage) &&
        <div className='moviesCardList__button' onClick={loadMore}>
          Еще
        </div>
      }
    </div>
  )
}
