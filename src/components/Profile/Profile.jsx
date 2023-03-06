import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <section className='profile'>
      <p className="profile__title">Привет, Name!</p>
      <ul className='profile__data'>
        <li className='profile__data-section'>Имя<p className="profile__data-info">Ваше имя</p></li>
        <li className='profile__data-section'>Email<p className="profile__data-info">Почта</p></li>
      </ul>
      <button className='profile__button profile__edit-button'>Редактировать</button>
      <button className='profile__button profile__exit-button'>Выйти из аккаунта</button>
    </section>
  )
}
