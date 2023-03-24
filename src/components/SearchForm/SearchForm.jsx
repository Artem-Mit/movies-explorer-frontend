import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useLocation } from 'react-router-dom';

export default function SearchForm({ onSearch }) {
  const location = useLocation().pathname
  const [isShort, setIsShort] = useState(false);
  const [formErrorVisibile, setFormErrorVisible] = useState(false);
  const { values, handleChange, setValues } =
    useFormAndValidation({ film: '' });


  useEffect(() => {
    if (location === '/movies') {
      const name = sessionStorage.getItem('movieName');
      const shortMovie = JSON.parse(sessionStorage.getItem('shortFilm'));
      if (name) {
        setValues({ film: name });
      }
      if ( !shortMovie ) {
        setIsShort(false)
      } else {
        setIsShort(true);
      }
    }
  }, [location, setValues])

  function submitSearchForm(e) {
    e.preventDefault();
    setFormErrorVisible(false);
    if (values.film.trim() === '') {
      setFormErrorVisible(true);
      return;
    }
    onSearch({ name: values.film, checked: isShort })
  }

  function onCheck() {
    setIsShort(prev => !prev);
  }


  return (
    <section className="search" aria-label='Поиск фильмов'>
      <form action="#" className="searchForm" onSubmit={submitSearchForm} noValidate>
        <fieldset className='searchForm__fieldset'>
          <input type='text' placeholder='Фильм' className='searchForm__input' name='film' value={values.film} onChange={handleChange} required></input>
          <button className='searchForm__button' type='submit' >Поиск</button>
        </fieldset>
        <span className={`searchForm__error ${formErrorVisibile ? 'searchForm__error_visible' : ''}`}>Нужно ввести ключевое слово</span>
        <FilterCheckbox checked={isShort} onCheckboxClick={onCheck} />
        <div className='searchForm__bottom-line'></div>
      </form>
    </section>
  )
}
