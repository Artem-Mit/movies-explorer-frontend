import React from 'react';
import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionButton from '../SectionButton/SectionButton';

export default function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <SectionTitle section='techs' title='Технологии' />
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__buttons'>
          <li className='techs__button-container'>
            <SectionButton name="HTML" link='https://developer.mozilla.org/ru/' section='techs' />
          </li>
          <li className='techs__button-container'>
            <SectionButton name="CSS" link='https://developer.mozilla.org/ru/' section='techs' />
          </li>
          <li className='techs__button-container'>
            <SectionButton name="JS" link='https://developer.mozilla.org/ru/' section='techs' />
          </li>
          <li className='techs__button-container'>
            <SectionButton name="React" link='https://reactjs.org/' section='techs' />
          </li>
          <li className='techs__button-container'>
            <SectionButton name="Git" link='https://github.com/Artem-Mit' section='techs' />
          </li>
          <li className='techs__button-container'>
            <SectionButton name="Express.js" link='https://expressjs.com/' section='techs' />
          </li>
          <li className='techs__button-container'>
            <SectionButton name="mongoDB" link='https://www.mongodb.com/' section='techs' />
          </li>
        </ul>
      </div>
    </section>
  )
}
