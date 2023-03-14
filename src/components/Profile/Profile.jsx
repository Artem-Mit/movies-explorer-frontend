import React, { useContext, useState, useEffect } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile({onLogOut}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <section className='profile' aria-label='Ваш профиль'>
      <p className="profile__title">Привет, {name}</p>
      <ul className='profile__data'>
        <li className='profile__data-section'>Имя<p className="profile__data-info">{name}</p></li>
        <li className='profile__data-section'>E-mail<p className="profile__data-info">{email}</p></li>
      </ul>
      <button className='profile__button profile__edit-button'>Редактировать</button>
      <button className='profile__button profile__exit-button' onClick={() => onLogOut()}>Выйти из аккаунта</button>
    </section>
  )
}
