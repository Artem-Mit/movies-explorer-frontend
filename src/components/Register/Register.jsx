import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

export default function Register({ onSubmit, authError }) {
  const { values, handleChange, errors, resetForm, isValid } =
    useFormAndValidation({ email: "", password: "", name: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({email: values.email, name: values.name, password: values.password})
    resetForm()
  };


  return (
    <AuthForm title='Добро пожаловать'
      name='registerForm'
      buttonText='Зарегистрироваться'
      onSubmit={handleSubmit}
      valid={isValid}
      error={authError}>
      <label htmlFor='name' className='authForm__label'>Имя
        <input
          onChange={handleChange}
          type='text'
          name='name'
          id='name'
          className='authForm__input'
          autoComplete='name'
          required minLength={2} maxLength={30}
          value={values.name}>
        </input>
        <span className='authForm__error'>{errors.name}</span>
      </label>
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
          autoComplete='new-password'
          required></input>
        <span className='authForm__error'>{errors.password}</span>
      </label>
    </AuthForm>
  )
}
