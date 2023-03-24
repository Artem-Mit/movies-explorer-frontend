import React from 'react';
import './AuthForm.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

export default function AuthForm({ title, name, buttonText, onSubmit, children, valid, error, isLoading }) {
  const loc = useLocation().pathname;

  return (
    <div className="authForm">
      <Link to='/'><img src={logo} alt='logo' /></Link>
      <h1 className="authForm__tilte">{title}</h1>
      <form
        onSubmit={onSubmit}
        action="#"
        className="authForm__form"
        name={`${name}`}
        noValidate
      >
        <fieldset className="authForm__fieldset">
          {children}
        </fieldset>
        {error && <span className='authForm__error-text'>{error}</span>}
        <button className={`authForm__button ${valid ? '' : 'authForm__button_disabled'} ${isLoading ? 'authForm__button_disabled' : ''}`} type="submit" onSubmit={onSubmit} disabled={!valid || isLoading}>
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


