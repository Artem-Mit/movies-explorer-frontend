import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css'


export default function SavedMovies() {
  return (
    <>
      <SearchForm />
      <section className='saved-movies' aria-label='Сохраненные фильмы'>
        <MoviesCardList />
      </section>
    </>
  )
}
