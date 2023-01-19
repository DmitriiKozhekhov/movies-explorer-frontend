import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';

function SearchForm({searchMovies, filterShortMovies}) {

  const currentRoute = useLocation();

  const [inputSearchValue, setInputSearchValue] = useState('');
  const [shortMovieSwitch, setShortMovieSwitch] = useState(false);

  function handleSearchInputChange(evt) {
    setInputSearchValue(evt.target.value);
  }

  function handleShortMovieSwitch() {
    const newSwitch = !shortMovieSwitch;
    setShortMovieSwitch(newSwitch);
    filterShortMovies(newSwitch);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    searchMovies(inputSearchValue);
  }

  useEffect(() => {
    if(currentRoute.pathname === '/movies') {
      setInputSearchValue(localStorage.getItem('inputSearchValue'));
      setShortMovieSwitch(localStorage.getItem('shortMoviesStatus') === 'true');
    }
  }, []);

  return(
    <section className="searchForm">
      <div className="searchForm__main">
        <form className="searchForm__inputGroup" onSubmit={handleSubmit} noValidate>
          <input type="text" value={inputSearchValue || ''} 
          onChange={handleSearchInputChange} 
          placeholder="Фильм" minLength="1" className="searchForm__input" required/>
          <button type="submit" className="searchForm__searchButton"></button>
        </form>
        <div className="searchForm__switchGroup">
          <p className="searchForm__shortFilms">Короткометражки</p>
          <label className="searchForm__switch">
            <input value={shortMovieSwitch} checked={shortMovieSwitch} onChange={handleShortMovieSwitch} 
            name="shortFilm" type="checkbox" className="searchForm__checkbox"/>
            <span className="searchForm__switchDecorator"></span>
          </label>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
