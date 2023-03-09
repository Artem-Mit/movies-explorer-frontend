import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div className='filterCheckbox'>
      <input type="checkbox" id='filterCheckbox__toggle-button' className="filterCheckbox__toggle-button" />
      <label htmlFor='filterCheckbox__toggle-button' className='filterCheckbox__text'>Короткометражки</label>
    </div>
  )
}
