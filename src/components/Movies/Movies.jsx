import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies() {
  return (
    <>
      <Header theme='white' />
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  )
}
