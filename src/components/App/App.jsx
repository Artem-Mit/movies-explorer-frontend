import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/movies" />
      <Route path="/saved-movies" />
      <Route path="/profile" />
      <Route path="/signin" />
      <Route path="/signup" />
    </Routes>
  );
}

export default App;
