import React from 'react';
import './Promo.css';
import promoLogo from '../../images/landingLogo.svg'

export default function Promo() {
  return (
    <section className='promo'>
      <img className='promo__logo' src={promoLogo} alt='promoLogo'></img>
      <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  )
}
