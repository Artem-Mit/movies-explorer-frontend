import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div class="filterCheckbox__container">
      <input type="checkbox" id='filterCheckbox__toggle-button' class="filterCheckbox__toggle-button" />
      <label for="filterCheckbox__toggle-button" class="filterCheckbox__text">Короткометражки</label>
    </div>
  )
}
