import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__info'>
        <p className='footer__date'>©{(new Date().getFullYear())}</p>
        <ul className="footer__links">
          <li className='footer__link-container'>
            <a className='footer__link' href='https://practicum.yandex.ru' target='_blanc'>Яндекс.Практикум</a>
          </li>
          <li className='footer__link-container'>
            <a className='footer__link' href='https://github.com/Artem-Mit' target='_blanc'>Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
