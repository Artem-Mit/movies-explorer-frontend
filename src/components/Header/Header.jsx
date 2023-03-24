import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useLocation  } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';

export default function Header({loggedIn}) {
  const [navTabVisible, setNavTabVisible] = useState(false);
  const location = useLocation().pathname;
  const notMainPage = location !== '/';


  function showNavigation() {
    setNavTabVisible(prev => !prev)
  }

  return (
    <header className={`header ${notMainPage ? 'header_white' : ''}`}>
      <div className='header__container'>
        <Link to='/'>
          <img src={logo} alt="logo" className='header__logo'/>
        </Link>
        <Navigation loggedIn={loggedIn} showNav={navTabVisible} toggleNav={showNavigation}/>
        {(loggedIn && notMainPage) && <Burger toggleNav={showNavigation}/>}
      </div>
    </header>
  )
}
