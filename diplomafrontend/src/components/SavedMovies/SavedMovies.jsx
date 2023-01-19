import React from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies ({
  showedMovies,
  searchMovies,
  preloader,
  preloaderMessage,
  spinPreloader,
  filterShortMovies,
  savedMoviesId,
  handleDeleteMovie}){

  return(
    <main className="savedMovies">
      <SearchForm
        searchMovies={searchMovies}
        filterShortMovies={filterShortMovies} />
      <Preloader
        preloader={preloader}
        preloaderMessage={preloaderMessage}
        spinPreloader={spinPreloader} />
      <MoviesCardList
        showedMovies={showedMovies}
        savedMoviesId={savedMoviesId}
        handleDeleteMovie={handleDeleteMovie} />
    </main>
  )
}

export default SavedMovies;
