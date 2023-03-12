import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


export default function MoviesCardList({ films }) {

  return (
    <div className='moviesCardList'>
      {!films && <p className='moviesCardList__notFoundText'>Фильмы не найдены</p>}
      {films &&
        <div className='moviesCardList__cards'>
          {films.slice(0, 12).map((movie) =>
            <MoviesCard
              key={movie.id}
              title={movie.title}
              length={movie.length} />
          )}
        </div>}
      {films && films.length > 12 &&
        <div className='moviesCardList__button'>
          Еще
        </div>
      }
    </div>
  )
}
