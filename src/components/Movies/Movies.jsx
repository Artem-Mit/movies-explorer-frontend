import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { defaultMovies } from '../../utils/defaultMovies';

export default function Movies() {
  return (
    <>
      <SearchForm />
      <section className="movies">
        <MoviesCardList films = {defaultMovies}/>
      </section>
    </>
  )
}
