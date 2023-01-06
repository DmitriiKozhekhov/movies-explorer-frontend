import React from "react";
import './MoviesCard.css';
function MoviesCard ({savedList, saved}){
  return(
    <div className={`moviesCard ${!savedList ? "moviesCard": ''} ${(savedList && !saved) ? "moviesCard_hider": ''}`}>
      <div className="moviesCard__image"></div>
      <div className="moviesCard__nameLikeGroup">
        <h2 className="moviesCard__name">Пи Джей Харви: A dog called money</h2>
        <button type="button" className={`moviesCard__button ${saved ? "moviesCard__saved": "moviesCard__like"} ${savedList ? "moviesCard__hider": ''}`}></button> 
        <button type="button" className={`moviesCard__button ${savedList ? "moviesCard__deleteButton": "moviesCard__hider"}`}></button> 
      </div>
      <div className="moviesCard__bottom">
        <p className="moviesCard__duration">1ч 42м</p>
      </div>
    </div>
  )
}

export default MoviesCard;
