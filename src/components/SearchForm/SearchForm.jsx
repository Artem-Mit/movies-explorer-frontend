import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import './SearchForm.css'

export default function SearchForm() {
  return (
    <>
      <form action="" className="searchForm">
        <fieldset className='searchForm__fieldset'>
          <input type='text' placeholder='Фильм' className='searchForm__input'></input>
          <button className='searchForm__button' type='button'>Поиск</button>
        </fieldset>
        <FilterCheckbox />
      </form>
      <Footer />
    </>

  )
}
