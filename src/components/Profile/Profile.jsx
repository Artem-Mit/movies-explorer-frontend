import React, { useContext, useState, useEffect } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export default function Profile({ onLogOut, onSubmit, error }) {
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation({ email: "", name: "" });
  const currentUser = useContext(CurrentUserContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setValues({ email: currentUser.email, name: currentUser.name });
  }, [currentUser, setValues]);

  function updateUser(e) {
    e.preventDefault();
    onSubmit({ name: values.name, email: values.email });
    setIsActive(false)
  }

  return (
    <section className='profile' aria-label='Ваш профиль'>
      <p className="profile__title">Привет, {values.name}</p>
      <form className='profile__data'>
        <label className='profile__data-section'>Имя
          <input
            className="profile__data-info"
            type='text'
            name='name'
            onChange={handleChange}
            value={values.name}
            disabled={!isActive}
            required>
          </input>
        </label>
        <label className='profile__data-section'>E-mail
          <input
            className="profile__data-info"
            type='email'
            name='email'
            onChange={handleChange}
            value={values.email}
            disabled={!isActive}
            required>
          </input>
        </label>
      </form>
      <span className='profile__error'>{(errors.name || errors.email) || error}</span>
      {isActive ?
        <button className='profile__button profile__edit-button' type='submit' onClick={updateUser} disabled={!isValid}>Сохранить</button> :
        <button className='profile__button profile__edit-button' type='button' onClick={() => setIsActive(prev => !prev)}>Редактировать</button>}
      <button className='profile__button profile__exit-button' onClick={() => onLogOut()}>Выйти из аккаунта</button>
    </section>
  )
}
