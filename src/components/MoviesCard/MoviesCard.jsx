import React, { useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import mainApi from '../../utils/MainApi';

export default function MoviesCard({ movie }) {
  const location = useLocation().pathname;
  const [favouriteFilm, setFavouriteFilm] = useState(false);
  const allFilmsClass = `moviesCard__button moviesCard__button_not-saved ${favouriteFilm ? 'moviesCard__button_saved' : ''}`;
  const savedFilmsClass = `moviesCard__button moviesCard__delete-button`;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  function createMovie() {
    mainApi.createMovie(movie)
      .then(setFavouriteFilm(prev => !prev))
      .catch((err) => console.log(err))
  }

  function deleteMovie() {
    mainApi.deleteMovie(movie.id)
      .then(setFavouriteFilm(prev => !prev))
      .catch((err) => console.log(err))
  }

  function toggleFavourite() {
    if (favouriteFilm) {
      deleteMovie()
    } else {
      createMovie()
    }
  }

  return (
    <article className='moviesCard'>
      <h3 className='moviesCard__title'>{movie.nameRU}</h3>
      <p className='moviesCard__length'>{`${hours}ч ${minutes}м`}</p>
      <a href={movie.trailerLink} target='blanc'>
        <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} className='moviesCard__image' />
      </a>
      {location === '/movies' ?
        <button
          className={allFilmsClass}
          onClick={toggleFavourite}>
        </button> :
        <button
          className={savedFilmsClass}
          onClick={toggleFavourite}
        >
        </button>
      }
    </article>
  )
}
