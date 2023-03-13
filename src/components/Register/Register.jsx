import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import mainApi from '../../utils/MainApi';

export default function Register() {
  const [error, setError] = useState('')
  const { values, handleChange, errors, resetForm, isValid } =
    useFormAndValidation({ email: "", password: "", name: ""});

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError('')
    await mainApi.register({name: values.name, email: values.email, password: values.password})
      .then((res) => console.log(res))
      .catch((err) => setError(err))
    resetForm()
  };


  return (
    <AuthForm title='Добро пожаловать' name='registerForm' buttonText='Зарегистрироваться' onSubmit={handleSubmit} valid={isValid} error={error}>
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
