import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import filmsfilter from '../../utils/filmsFilter';


export default function SavedMovies({savedMovies}) {
  const [isShort, setIsShort] = useState(false);
  const [moviesToRender, setMoviesToRender] = useState([])

  function onSearch({name}) {
    setMoviesToRender(filmsfilter(savedMovies, name, isShort))
  }

  function onCheck() {
    setIsShort(prev => !prev);
  }

  return (
    <>
      <SearchForm onSearch={onSearch} isShort={isShort} onCheckboxClick={onCheck}/>
      <section className='saved-movies' aria-label='Сохраненные фильмы'>
        <MoviesCardList movies={moviesToRender}/>
      </section>
    </>
  )
}
