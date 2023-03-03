import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';

export default function Header({ loggedIn = true, theme }) {

  const location = useLocation();

  return (
    <header className={`header ${theme === 'white' ? 'header_white' : ''}`}>
      <div className='header__container'>
        <Link to='/'>
          <img src={logo} alt="logo" className='header__logo' />
        </Link>
        <Navigation />
        {(loggedIn && location.pathname !== '/') && <Burger />}
      </div>
    </header>
  )
}
