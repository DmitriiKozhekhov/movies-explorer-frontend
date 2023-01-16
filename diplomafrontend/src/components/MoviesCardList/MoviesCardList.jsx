import React from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList ({savedList}){
  return(
    <section className="moviesCardList">
      <ul className="moviesCardList__cards">
        <MoviesCard savedList={savedList} saved={true}/>
        <MoviesCard savedList={savedList}/>
        <MoviesCard savedList={savedList} saved={true}/>
        <MoviesCard savedList={savedList}/>
        <MoviesCard savedList={savedList} saved={true}/>
        <MoviesCard savedList={savedList}/>
        <MoviesCard savedList={savedList}/>
        <MoviesCard savedList={savedList}/>
        <MoviesCard savedList={savedList}/>
      </ul>
      <div className="moviesCardList__more">
        <button className="moviesCardList__moreButton">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;
