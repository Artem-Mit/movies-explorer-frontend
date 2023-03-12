import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export default function SearchForm({onSearch}) {
  const [formErrorVisibile, setFormErrorVisible] = useState(false);
  const { values, handleChange, resetForm } =
    useFormAndValidation({ film: '' });


  function submitSearchForm(e) {
    e.preventDefault();
    setFormErrorVisible(false);
    if (values.film.trim() === '') {
      setFormErrorVisible(true);
      resetForm();
      return;
    }
    onSearch({value: values.film})
    resetForm();
  }


  return (
    <section className="search" aria-label='Поиск фильмов'>
      <form action="#" className="searchForm" onSubmit={submitSearchForm} noValidate>
        <fieldset className='searchForm__fieldset'>
          <input type='text' placeholder='Фильм' className='searchForm__input' name='film' value={values.film} onChange={handleChange} required></input>
          <button className='searchForm__button' type='submit' >Поиск</button>
        </fieldset>
        <span className={`searchForm__error ${formErrorVisibile ? 'searchForm__error_visible' : ''}`}>Нужно ввести ключевое слово</span>
        <FilterCheckbox />
        <div className='searchForm__bottom-line'></div>
      </form>
    </section>
  )
}
