import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { defaultMovies } from '../../utils/defaultMovies';

export default function Movies() {
  return (
    <>
      <SearchForm />
      <section className="movies" aria-label='Фильмы'>
        <MoviesCardList films = {defaultMovies}/>
      </section>
    </>
  )
}
