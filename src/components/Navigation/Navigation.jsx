import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

export default function Navigation({ loggedIn = true }) {
  return (
    <nav className={`navigation ${loggedIn ? "navigation_loggedIn" : ''}`}>
      {!loggedIn && (
        <ul className='navigation__links-container'>
          <li className='navigation__link-container'>
            <NavLink to='/signup' className='navigation__link'>Регистрация</NavLink>
          </li>
          <li className='navigation__link-container'>
            <NavLink className='navigation__link' to='/signin'>
              <button className='navigation__button'>Войти</button>
            </NavLink>
          </li>
        </ul>
      )}
      {loggedIn && (
        <ul className='navigation__links-container_loggedIn'>
          <li className='navigation__link-container_loggedIn'>
            <NavLink to='/' end={true}
              className={({ isActive }) => isActive ? 'navigation__link_loggedIn navigation__link_active' : 'navigation__link_loggedIn'}>
              Главная
            </NavLink>
          </li>
          <li className='navigation__link-container_loggedIn'>
            <NavLink to='/movies'
              className={({ isActive }) => isActive ? 'navigation__link_loggedIn navigation__link_active' : 'navigation__link_loggedIn'}>
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__link-container_loggedIn'>
            <NavLink to='/saved-movies'
              className={({ isActive }) => isActive ? 'navigation__link_loggedIn navigation__link_active' : 'navigation__link_loggedIn'}>
              Сохраненные фильмы
            </NavLink>
          </li>
          <li className='navigation__link-container_loggedIn'>
            <NavLink className='navigation__link_loggedIn' to='/profile'>
              <button className='navigation__button_loggedIn'>Аккаунт</button>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}
