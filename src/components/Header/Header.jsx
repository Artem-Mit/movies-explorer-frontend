import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';

export default function Header({ loggedIn = true}) {

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/'>
          <img src={logo} alt="logo" className='header__logo' />
        </Link>
        <Navigation />
        {loggedIn && <Burger />}
      </div>
    </header>
  )
}
