import { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkIn(token)
        .then((res) => setCurrentUser(res))
        .then(() => handleLogin())
        .catch((err) => console.log(err))
    }
  }, [loggedIn]);

  useEffect(() => {
    setAuthError('');
    setIsLoading(false);
  }, [nav]);

  function handleLogin() {
    setLoggedIn(true);
  };

  function handleRegistration(data) {
    setIsLoading(true);
    if (!data.email || !data.password || !data.name) {
      setAuthError(WRONG_AUTH_DATA_MESSAGE)
      return;
    };
    setAuthError('')
    mainApi.register(data)
      .then(() => handleLoginSubmit(data))
      .then(() => setIsLoading(false))
      .catch((err) => {
        if (err === ALREADY_EXIST_CODE) {
          setAuthError(ALREADY_EXIST_MESSAGE);
          return
        }
        setAuthError(err);
      })
      .finally(() => setIsLoading(false))
  };

  function handleLoginSubmit(data) {
    setAuthError('')
    setIsLoading(true);
    mainApi.login({ email: data.email, password: data.password })
      .then((res) => localStorage.setItem("token", res.token))
      .then(() => { handleLogin(); nav('/movies'); setIsLoading(false); })
      .catch((err) => {
        if (err === AUTH_ERROR_CODE) {
          setAuthError(WRONG_AUTH_DATA_MESSAGE);
          return;
        };
        setAuthError(err);
      })
      .finally(() => setIsLoading(false))
  };

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

  console.log(loggedIn)
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        {!loggedIn && <Route path="/signin" element={<Login onSubmit={handleLoginSubmit} authError={authError} isLoading={isLoading} />} />}
        {!loggedIn && <Route path="/signup" element={<Register onSubmit={handleRegistration} authError={authError} isLoading={isLoading} />} />}
        <Route path='' element={<Layout loggedIn={loggedIn} />}>
          <Route path='/' element={<Main />} />
          <Route path="/movies"
            element={
              <ProtectedRoute >
                <Movies />
              </ProtectedRoute>}
          />
          <Route path="/saved-movies"
            element={
              <ProtectedRoute >
                <SavedMovies />
              </ProtectedRoute>}
          />
          <Route path="/profile"
            element={
              <ProtectedRoute >
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
