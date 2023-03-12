import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css'

export default function SearchForm() {
  return (
    <section className="search" aria-label='Поиск фильмов'>
      <form action="#" className="searchForm">
        <fieldset className='searchForm__fieldset'>
          <input type='text' placeholder='Фильм' className='searchForm__input' required></input>
          <button className='searchForm__button' type='submit'>Поиск</button>
        </fieldset>
        <FilterCheckbox />
        <div className='searchForm__bottom-line'></div>
      </form>
    </section>
  )
}
