import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

export default function Login({onSubmit, authError}) {

  const { values, handleChange, errors, resetForm, isValid } =
    useFormAndValidation({ email: "", password: ""});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({email: values.email, password: values.password})
    resetForm()
  };

  return (
    <AuthForm title='Рады видеть!' name='loginForm' buttonText='Войти' onSubmit={handleSubmit} valid={isValid} error={authError}>
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
