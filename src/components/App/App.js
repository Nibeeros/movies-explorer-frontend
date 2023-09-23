import { Fragment, useState } from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const login = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/');
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const headerIsVisible =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies' ||
    location.pathname === '/profile';

  const footerIsVisible =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies';

  return (
    <Fragment>
      {headerIsVisible && <Header isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile logout={logout} />} />
        <Route path='/signin' element={<Login login={login} />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      {footerIsVisible && <Footer />}
    </Fragment>
  );
}

export default App;
