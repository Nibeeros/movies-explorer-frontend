import { useLocation } from 'react-router-dom';
import movieImg from '../../images/movie-img/movie.png';

import './MoviesCard.css';

function MoviesCard({ isFavoriteMovie }) {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === '/saved-movies';

  return (
    <li className='movie-card'>
      <div className='movie-card__top'>
        <img src={movieImg} alt='превью фильма' className='movie-card__img' />
        <div className='movie-card__controls'>
          {!isFavoriteMovie && !isSavedMoviesPage && (
            <button className='movie-card__control movie-card__control_save'>
              Сохранить
            </button>
          )}
          {isFavoriteMovie && (
            <>
              {!isSavedMoviesPage && (
                <button className='movie-card__control movie-card__control_saved'>
                  &#10003;
                </button>
              )}
              {isSavedMoviesPage && (
                <button className='movie-card__control movie-card__control_delete'>
                  &times;
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <div className='movie-card__footer'>
        <h4 className='movie-card__title'>Книготорговцы</h4>
        <p className='movie-card__duration'>1ч 17м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
