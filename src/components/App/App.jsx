import { useCallback, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import mainApi from '../../utils/MainApi';

function App() {
  const nav = useNavigate()
  const [authError, setAuthError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });

  function handleLogin() {
    setLoggedIn(true);
  }

  async function handleRegistration(data) {
    if (!data.email || !data.password || !data.name) {
      setAuthError('Необходимо ввести логин и пароль')
      return;
    }
    setAuthError('')
    await mainApi.register(data)
      .then(() => handleLoginSubmit(data))
      .catch((err) => setAuthError(err))
  }

  async function handleLoginSubmit(data) {
    setAuthError('')
    await mainApi.login({ email: data.email, password: data.password })
      .then((res) => localStorage.setItem("token", res.token))
      .then(() => handleLogin())
      .catch((err) => setAuthError(err))
      .finally(() => nav('/movies'))
  }

  const checkIn = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
       mainApi.checkIn(token)
        .then((res) => setCurrentUser(res))
        .then(() => handleLogin())
        .catch((err) => console.log(err))
    }
  }, [])

  function logOut() {
    localStorage.removeItem('token');
    nav('/');
    setCurrentUser({ name: "", email: "" });
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/signin" element={<Login onSubmit={handleLoginSubmit} />} />
        <Route path="/signup" element={<Register onSubmit={handleRegistration} authError={authError} />} />
        <Route path='/' element={<Layout loggedIn={loggedIn} onCheckIn={checkIn} />}>
          <Route path='' element={<Main />} />
          <Route path="movies"
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Movies />
              </ProtectedRoute>}
          />
          <Route path="saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <SavedMovies />
              </ProtectedRoute>}
          />
          <Route path="profile"
            element={
              <ProtectedRoute loggedIn={loggedIn} >
                <Profile onLogOut={logOut} />
              </ProtectedRoute>}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
