import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { VALIDATION_ERROR_MESSAGE } from '../../utils/constants';

export default function Login({ onSubmit, authError, isLoading }) {
  const [loginError, setLoginError] = useState('')
  const { values, handleChange, errors, isValid } =
    useFormAndValidation({ email: "", password: "" });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoginError('');
    if (validateEmail(values.email)) {
      onSubmit({ email: values.email, password: values.password })
    } else {
      setLoginError(VALIDATION_ERROR_MESSAGE)
    }
  };

  return (
    <AuthForm
    title='Рады видеть!'
    name='loginForm'
    buttonText='Войти'
    onSubmit={handleSubmit}
    valid={isValid}
    error={authError || loginError}
    isLoading={isLoading}
    >
      <label htmlFor='email' className='authForm__label'>E-mail
        <input
          onChange={handleChange}
          type='email'
          name='email'
          id='email'
          className='authForm__input'
          autoComplete='email'
          value={values.email}
          required></input>
        <span className='authForm__error'>{errors.email}</span>
      </label>
      <label htmlFor='password' className='authForm__label'>Пароль
        <input
          onChange={handleChange}
          type='password'
          name='password'
          id='password'
          className='authForm__input'
          value={values.password}
          autoComplete='current-password'
          required></input>
        <span className='authForm__error'>{errors.password}</span>
      </label>
    </AuthForm>
  )
}
