import { useCallback, useEffect, useState } from 'react';
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
import { ALREADY_EXIST_MESSAGE, ALREADY_EXIST_CODE, AUTH_ERROR_CODE, WRONG_AUTH_DATA_MESSAGE } from '../../utils/constants';

function App() {
  const nav = useNavigate()
  const [authError, setAuthError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });

  useEffect(() => {
    setAuthError('')
  }, [nav]);

  function handleLogin() {
    setLoggedIn(true);
  };

  function handleRegistration(data) {
    if (!data.email || !data.password || !data.name) {
      setAuthError(WRONG_AUTH_DATA_MESSAGE)
      return;
    };
    setAuthError('')
    mainApi.register(data)
      .then(() => handleLoginSubmit(data))
      .catch((err) => {
        if (err === ALREADY_EXIST_CODE) {
          setAuthError(ALREADY_EXIST_MESSAGE);
          return
        }
        setAuthError(err)})
  };

  function handleLoginSubmit(data) {
    setAuthError('')
    mainApi.login({ email: data.email, password: data.password })
      .then((res) => localStorage.setItem("token", res.token))
      .then(() => {handleLogin(); nav('/movies')})
      .catch((err) => {
        if (err === AUTH_ERROR_CODE) {
          setAuthError(WRONG_AUTH_DATA_MESSAGE);
          return;
        };
        setAuthError(err)})
  };

  const checkIn = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkIn(token)
        .then((res) => { setCurrentUser(res); })
        .then(() => handleLogin())
        .catch((err) => console.log(err))
    }
  }, [])

  function logOut() {
    localStorage.removeItem('token');
    nav('/');
    setCurrentUser({ name: "", email: "" });
    setLoggedIn(false);
    sessionStorage.clear()
  };

  function updateUser(data) {
    setAuthError('')
    mainApi.updateUser(data)
      .then((res) => {
        setCurrentUser({ email: res.email, name: res.name });
        setAuthError('Все обновилось :)');
      })
      .catch((err) => setAuthError(err));
  };


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/signin" element={<Login onSubmit={handleLoginSubmit} authError={authError}/>} />
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
                <Profile onLogOut={logOut} onSubmit={updateUser} error={authError} />
              </ProtectedRoute>}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
