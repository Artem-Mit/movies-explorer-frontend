import React, { useState } from 'react';
import './MoviesCard.css';
import moviePic from '../../images/moviePic.png'

export default function MoviesCard({ title, length }) {
  const [addButtonClass, setAddButtonClass] = useState('moviesCard__add-button');
  function changeAddButtonClass() {
    addButtonClass === 'moviesCard__add-button' ?
      setAddButtonClass('moviesCard__add-button moviesCard__add-button-saved') :
      setAddButtonClass('moviesCard__add-button')
  }


  return (
    <article className='moviesCard'>
      <h3 className='moviesCard__title'>{title}</h3>
      <p className='moviesCard__length'>{length}</p>
      <img src={moviePic} alt={title} className='moviesCard__image' />
      <div className={addButtonClass} onClick={() => changeAddButtonClass()}></div>
    </article>
  )
}
