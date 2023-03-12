import React from 'react';
import './AuthForm.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

export default function AuthForm({ title, name, buttonText, onSubmit, children }) {
  const loc = useLocation().pathname
  return (
    <div className="authForm">
      <Link to='/'><img src={logo} alt='logo' /></Link>
      <h1 className="authForm__tilte">{title}</h1>
      <form
        onSubmit={onSubmit}
        action="#"
        className="authForm__form"
        name={`${name}`}
      >
        <fieldset className="authForm__fieldset">
          {children}
        </fieldset>
        <button className="authForm__button" type="submit" onSubmit={onSubmit}>
          {buttonText}
        </button>
        {loc === '/signup' ?
          <p className='authForm__underButtonText'>Уже зарегистрированы?
            <Link to='/signin' className='authForm__underButtonLink'>Войти</Link>
          </p> :
          <p className='authForm__underButtonText'>Ещё не зарегистрированы?
            <Link to='/signup' className='authForm__underButtonLink'>Регистрация</Link>
          </p>
        }
      </form>
    </div>
  );
}


