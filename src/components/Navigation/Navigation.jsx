import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

export default function Navigation({ loggedIn, showNav, login, toggleNav, logout }) {
  function goHome() {
    logout()
    toggleNav()
  }
  return (
    <>
      {!loggedIn && (
        <nav className={`navigation`}>
          <ul className='navigation__links-container'>
            <li className='navigation__link-container'>
              <NavLink to='/signup' className='navigation__link'>Регистрация</NavLink>
            </li>
            <li className='navigation__link-container'>
              <NavLink className='navigation__link' to='/movies'>
                <button className='navigation__button' onClick={() => login()}>Войти</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      {loggedIn && (
        <nav className={`navigation ${loggedIn ? 'navigation_loggedIn' : ''} ${showNav ? "navigation__opened" : ''}`}>
          <ul className='navigation__links-container_loggedIn'>
            <li className='navigation__link-container_loggedIn'>
              <NavLink to='/' end={true}
                className={({ isActive }) => isActive ? 'navigation__link_loggedIn navigation__link_active' : 'navigation__link_loggedIn'}
                onClick={goHome}>
                Главная
              </NavLink>
            </li>
            <li className='navigation__link-container_loggedIn'>
              <NavLink to='/movies'
                className={({ isActive }) => isActive ? 'navigation__link_loggedIn navigation__link_active' : 'navigation__link_loggedIn'}
                onClick={toggleNav}>
                Фильмы
              </NavLink>
            </li>
            <li className='navigation__link-container_loggedIn'>
              <NavLink to='/saved-movies'
                className={({ isActive }) => isActive ? 'navigation__link_loggedIn navigation__link_active' : 'navigation__link_loggedIn'}
                onClick={toggleNav}>
                Сохраненные фильмы
              </NavLink>
            </li>
            <li className='navigation__link-container_loggedIn'>
              <NavLink className='navigation__link_loggedIn' to='/profile'>
                <button className='navigation__button_loggedIn' onClick={toggleNav} >Аккаунт</button>
              </NavLink>
            </li>
          </ul>
          {showNav && <div className='navigation__close-btn' onClick={toggleNav}></div>}
        </nav>
      )}
    </>
  )
}
