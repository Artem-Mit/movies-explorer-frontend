import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

export default function Login() {
  const { values, handleChange, errors, resetForm } =
    useFormAndValidation({ email: "", password: ""});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetForm()
  };

  return (
    <AuthForm title='Рады видеть!' name='loginForm' buttonText='Войти' onSubmit={handleSubmit}>
      <label htmlFor='email' className='authForm__label'>E-mail
        <input
          onChange={handleChange}
          type='email'
          name='email'
          className='authForm__input'
          value={values.email}
          required></input>
        <span className='authForm__error'>{errors.email}</span>
      </label>
      <label htmlFor='password' className='authForm__label'>Пароль
        <input
          onChange={handleChange}
          type='password'
          name='password'
          className='authForm__input'
          value={values.password}
          autoComplete='true'
          required></input>
        <span className='authForm__error'>{errors.password}</span>
      </label>
    </AuthForm>
  )
}
