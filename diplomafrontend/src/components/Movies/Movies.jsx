import React from "react";
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
 
function Movies ({
  showMore,
  moviesRemains,
  shortMoviesRemains,
  showedMovies,
  shortMoviesStatus,
  searchMovies,
  preloader,
  preloaderMessage,
  spinPreloader,
  filterShortMovies,
  handleSaveMovie,
  handleDeleteMovie,
  savedMovies,
  savedMoviesId}){
    
    return(
      <main className="movies">
        <SearchForm
          searchMovies={searchMovies}
          filterShortMovies={filterShortMovies} />
        <Preloader
          preloader={preloader}
          preloaderMessage={preloaderMessage}
          spinPreloader={spinPreloader} />
        <MoviesCardList
          showMore={showMore}
          moviesRemains={moviesRemains}
          shortMoviesRemains={shortMoviesRemains}
          showedMovies={showedMovies}
          shortMoviesStatus={shortMoviesStatus}
          isSavedList={false}
          preloader={preloader}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
          savedMovies={savedMovies}
          savedMoviesId={savedMoviesId} />
      </main>
    )
  }
  
  export default Movies;
