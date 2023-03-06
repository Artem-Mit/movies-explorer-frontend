import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/savedMovies';
import './SavedMovies.css'


export default function SavedMovies() {
  return (
    <>
      <SearchForm />
      <section className='saved_movies'>
        <MoviesCardList films={savedMovies}/>
      </section>
    </>
  )
}
