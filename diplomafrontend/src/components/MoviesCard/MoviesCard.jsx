import React from "react";
import './MoviesCard.css';
function MoviesCard (){
  return(
    <li className="moviesCard">
      <div className="moviesCard__image"></div>
      <div className="moviesCard__nameLikeGroup">
        <h2 className="moviesCard__name">Пи Джей Харви: A dog called money</h2>
        <button type="button" className="moviesCard__like"></button>
      </div>
      <div className="moviesCard__bottom">
        <p className="moviesCard__duration">1ч42м</p>
      </div>
    </li>
  )
}

export default MoviesCard;
