import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path='/' element={<Layout />}>
        <Route path="" element={<Main />} />
        <Route path="movies" element={<Movies />} />
        <Route path="saved-movies" element={<SavedMovies />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
