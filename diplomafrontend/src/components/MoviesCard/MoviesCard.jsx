import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


function MoviesCard ({
  movie,
  handleSaveMovie,
  handleDeleteMovie,
  savedMoviesId,
}){



  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;

  const currentRoute  = useLocation();

  const [movieImageUrl, setMovieImageUrl] = useState([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {

    setIsSaved(savedMoviesId.includes(movie.movieId || movie.id));

    if(currentRoute.pathname === '/movies') {
      setMovieImageUrl(`url(https://api.nomoreparties.co${movie.image.url})`);
    } else {
      setMovieImageUrl(`url(${movie.image})`);
    }
  }, [savedMoviesId]);

  function handleSave() {
    handleSaveMovie(movie);
  }

  function handleDelete() {
    handleDeleteMovie(movie);
  }

  return(
    <div className={`moviesCard`}>
      <a className='moviesCard__trailerLink' href={movie.trailerLink} target="_blank" rel="noreferrer"> 
        <div className="moviesCard__image" alt={movie.nameRU} style={{ backgroundImage: `${movieImageUrl}` }}></div>
      </a>
      <div className="moviesCard__nameLikeGroup">
        <h2 className="moviesCard__name">{movie.nameRU}</h2>
        <button type="button" className={`moviesCard__button ${isSaved ? "moviesCard__saved": "moviesCard__like"} ${currentRoute.pathname === '/saved-movies' && "moviesCard__hider"}`} 
        onClick={(isSaved && currentRoute.pathname === '/movies') ? handleDelete : handleSave}></button> 
        <button type="button" className={`moviesCard__button ${(isSaved && currentRoute.pathname === '/saved-movies') ? "moviesCard__deleteButton": "moviesCard__hider"}`} onClick={handleDelete} ></button> 
      </div>
      <div className="moviesCard__bottom">
        <p className="moviesCard__duration">{`${hours}ч ${minutes}м`}</p>
      </div>
    </div>
  )
}

export default MoviesCard;

