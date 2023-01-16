import React from "react";
import './SearchForm.css';
function SearchForm (){
  return(
    <section className="searchForm">
      <div className="searchForm__main">
        <form className="searchForm__inputGroup">
          <input type="text" className="searchForm__input" placeholder="Фильм" required/>
          <button type="submit" className="searchForm__searchButton"></button>
        </form>
        <div className="searchForm__switchGroup">
          <p className="searchForm__shortFilms">Короткометражки</p>
          <label className="searchForm__switch">
            <input name="shortFilm" type="checkbox" className="searchForm__checkbox" />
            <span className="searchForm__switchDecorator"></span>
          </label>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;
