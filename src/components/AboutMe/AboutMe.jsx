import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import studentPhoto from '../../images/studentPhoto.jpg';

export default function AboutMe({children}) {
  return (
    <section className='aboutMe' id='aboutMe'>
      <SectionTitle title='Студент' section='aboutMe' />
      <article className='aboutMe__student'>
        <div className='aboutMe__student-information'>
          <p className='aboutMe__student-name'>Артем</p>
          <p className='aboutMe__student-profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='aboutMe__student-text'>Я родился и живу в Санкт-Петербурге. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.</p>
          <a href='https://github.com/Artem-Mit' target='_blank' rel='noreferrer' className='aboutMe__student-githubLink'>Github</a>
        </div>
        <img src={studentPhoto} alt='studentPhoto' className='aboutMe__student-photo'></img>
      </article>
      {children}
    </section>
  )
}
