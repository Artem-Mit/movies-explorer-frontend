import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { defaultMovies } from '../../utils/defaultMovies';

export default function MoviesCardList() {

  return (
    <section className='moviesCardList'>
      <div className='moviesCardList__cards'>
        {defaultMovies.map((movie) =>
          <MoviesCard
            key={movie.id}
            title={movie.title}
            length={movie.length} />
        )}
      </div>
      <div className='moviesCardList__button'>
        Еще
      </div>
    </section>
  )
}
