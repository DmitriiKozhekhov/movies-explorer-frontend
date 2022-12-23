import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList (){
  return(
    <section className="moviesCardList">
      <ul className="moviesCardList__cards">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <div className="moviesCardList__more">
        <button className="moviesCardList__moreButton">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;
