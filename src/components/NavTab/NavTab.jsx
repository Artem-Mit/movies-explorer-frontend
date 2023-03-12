import React from 'react';
import './NavTab.css';

export default function NavTab() {
  return (
    <div className='navTab'>
      <ul className='navTab__links'>
        <li className='navTab__link-container'>
          <a className='navTab__link' href='#aboutProject'>О проекте</a>
        </li>
        <li className='navTab__link-container'>
          <a className='navTab__link' href='#techs'>Технологии</a>
        </li>
        <li className='navTab__link-container'>
          <a className='navTab__link' href='#aboutMe'>Студент</a>
        </li>
      </ul>
    </div>
  )
}
