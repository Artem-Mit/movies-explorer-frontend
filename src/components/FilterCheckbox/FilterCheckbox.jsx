import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({checked, onCheckboxClick}) {

  return (
    <div className='filterCheckbox'>
      <input type="checkbox"
        id='filterCheckbox__toggle-button'
        className="filterCheckbox__toggle-button"
        checked={checked}
        onChange={onCheckboxClick}
      />
      <label htmlFor='filterCheckbox__toggle-button' className='filterCheckbox__text'>Короткометражки</label>
    </div>
  )
}
