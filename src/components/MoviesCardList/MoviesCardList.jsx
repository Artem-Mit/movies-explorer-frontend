import React from 'react';
import './MoviesCardList.css';

export default function MoviesCardList() {

  return (
    <section className='moviesCardList'>
      <div className='moviesCardList__cards'></div>
      <div className='moviesCardList__button'>
        Еще
      </div>
    </section>
  )
}
