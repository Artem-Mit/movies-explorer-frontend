import React, { useState } from 'react';
import './MoviesCard.css';
import moviePic from '../../images/moviePic.png'
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ title, length }) {
  const location = useLocation().pathname;
  const [favouriteFilm, setFavouriteFilm] = useState(false);
  const allFilmsClass = `moviesCard__button moviesCard__button_not-saved ${favouriteFilm ? 'moviesCard__button_saved' : ''}`;
  const savedFilmsClass = `moviesCard__button moviesCard__delete-button`;

  return (
    <article className='moviesCard'>
      <h3 className='moviesCard__title'>{title}</h3>
      <p className='moviesCard__length'>{length}</p>
      <img src={moviePic} alt={title} className='moviesCard__image' />
      <button
        className={location === '/movies' ? allFilmsClass : savedFilmsClass}
        onClick={() => setFavouriteFilm(prev => !prev)}>
      </button>
    </article>
  )
}
