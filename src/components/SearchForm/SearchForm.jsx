import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css'

export default function SearchForm() {
  return (
    <section className="search">
      <form action="" className="searchForm">
        <fieldset className='searchForm__fieldset'>
          <input type='text' placeholder='Фильм' className='searchForm__input'></input>
          <button className='searchForm__button' type='button'>Поиск</button>
        </fieldset>
        <FilterCheckbox />
        <div className='searchForm__bottom-line'></div>
      </form>
    </section>
  )
}
