import React, { useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowDimensions from '../../hooks/useWindowDimensions';


export default function MoviesCardList({ films }) {
  const { width } = useWindowDimensions();
  const [filmsOnPage, setFilmsOnPage] = useState(films.slice(0, filmsPerPage()).length)
  console.log(filmsOnPage)

  function filmsPerPage() {
    if (width <= 550) {
      return 5
    }
    if (width <= 768) {
      return 8
    }
    if (width <= 1280) {
      return 12
    }
  }


  function loadMore() {
    if (width <= 550) {
      return setFilmsOnPage(prev => prev + 1);
    }
    if (width <= 768) {
      return setFilmsOnPage(prev => prev + 2);
    }
    if (width <= 1280) {
      return setFilmsOnPage(prev => prev + 3);
    }
  }

  return (
    <div className='moviesCardList'>
      {films.length === 0 && <p className='moviesCardList__notFoundText'>Фильмы не найдены</p>}
      {films.length > 0 &&
        <div className='moviesCardList__cards'>
          {films.slice(0, filmsOnPage).map((movie) =>
            <MoviesCard
              key={movie.id}
              movie={movie} />
          )}
        </div>}
      {!(films.length === filmsOnPage) &&
        <div className='moviesCardList__button' onClick={loadMore}>
          Еще
        </div>
      }
    </div>
  )
}
