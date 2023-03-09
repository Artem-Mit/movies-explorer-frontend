import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [navTabVisible, setNavTabVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const notMainPage = location !== '/';

  function login() {
    setLoggedIn(true);
    navigate('/movies');
  }

  function logout() {
    setLoggedIn(false);
  }

  function showNavigation() {
    setNavTabVisible(prev => !prev)
  }

  return (
    <header className={`header ${notMainPage ? 'header_white' : ''}`}>
      <div className='header__container'>
        <Link to='/'>
          <img src={logo} alt="logo" className='header__logo' onClick={() => logout()}/>
        </Link>
        <Navigation loggedIn={loggedIn} login={login} logout={logout} showNav={navTabVisible} toggleNav={showNavigation}/>
        {(loggedIn && notMainPage) && <Burger toggleNav={showNavigation}/>}
      </div>
    </header>
  )
}
