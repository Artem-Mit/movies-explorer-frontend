import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="aboutProject" id='aboutProject'>
      <SectionTitle section='aboutProject' title='О проекте' />
      <ul className="aboutProject__stages">
        <li className="aboutProject__stage">
          <h3 className="aboutProject__stage-title">Дипломный проект включал 5 этапов</h3>
          <p className='aboutProject__stage-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="aboutProject__stage">
          <h3 className="aboutProject__stage-title">На выполнение диплома ушло 5 недель</h3>
          <p className='aboutProject__stage-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='aboutProject__timeLine'>
          <p className="aboutProject__timeLine-backend-time">1 неделя</p>
          <p className="aboutProject__timeLine-frontend-time">4 недели</p>
          <p className="aboutProject__timeLine-backend-title">Back-end</p>
          <p className="aboutProject__timeLine-frontend-title">Front-end</p>
      </div>
    </section>
  )
}
