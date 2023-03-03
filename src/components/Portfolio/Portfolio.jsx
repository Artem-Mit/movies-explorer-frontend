import React from 'react';
import PortfolioLink from '../PortfolioLink/PortfolioLink';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <article className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links-container'>
        <li className='portfolio__link-container'><PortfolioLink name='Статичный сайт' link='https://github.com/Artem-Mit/how-to-learn'/></li>
        <li className='portfolio__link-container'><PortfolioLink name='Адаптивный сайт' link='https://github.com/Artem-Mit/russian-travel'/></li>
        <li className='portfolio__link-container'><PortfolioLink name='Одностраничное приложение' link='https://github.com/Artem-Mit/react-mesto-api-full'/></li>
      </ul>
    </article>
  )
}
