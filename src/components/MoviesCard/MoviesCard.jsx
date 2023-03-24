import React, { useEffect, useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ movie, savedMovies, deleteSavedMovie, addMovieToFavourite, removeMovieFromFavourite }) {
  const location = useLocation().pathname;
  const [favouriteFilm, setFavouriteFilm] = useState(false);
  const allFilmsClass = `moviesCard__button moviesCard__button_not-saved ${favouriteFilm ? 'moviesCard__button_saved' : ''}`;
  const savedFilmsClass = `moviesCard__button moviesCard__delete-button`;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  useEffect(() => {
    if (savedMovies) {
      const favouriteFilm = savedMovies.find((savedMovie) => savedMovie.movieId === movie.id);
      if (favouriteFilm) {
        setFavouriteFilm(true);
      } else {
        setFavouriteFilm(false);
      }
    }
  }, [savedMovies, movie])

  function createMovieEntity(movie) {
    const movieData = {
      ...movie,
      movieId: movie.id,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    };
    delete movieData.id;
    delete movieData._id;
    delete movieData.created_at;
    delete movieData.updated_at;
    return movieData;
  }

  function deleteMovie() {
    if (location === '/saved-movies') {
      deleteSavedMovie(movie);
      return;
    }
    removeMovieFromFavourite(movie);
  }

  function createMovie() {
    addMovieToFavourite(createMovieEntity(movie));
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
        <img src={location === '/saved-movies' ?
          movie.image :
          `https://api.nomoreparties.co/${movie.image.url}`}
          alt={movie.nameRU} className='moviesCard__image' />
      </a>
      {location === '/movies' ?
        <button
          className={allFilmsClass}
          onClick={toggleFavourite}>
        </button> :
        <button
          className={savedFilmsClass}
          onClick={deleteMovie}
        >
        </button>
      }
    </article>
  )
}
