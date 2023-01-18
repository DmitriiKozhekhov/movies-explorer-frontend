import { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import {shortFilmDuration, moviesShow1280, moviesShow768, moviesShow320, moviesMore1280, moviesMore768, moviesMore320} from '../../constants/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Popup from '../Popup/Popup';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from "../../utils/MainApi";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import * as Auth from '../../utils/Auth';


function App() {
  const history = useHistory();
  const currentRoute = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [extraMovies, setExtraMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [extraShortMovies, setExtraShortMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedShowedMovies, setSavedShowedMovies] = useState([]);
  const [savedFoundMovies, setSavedFoundMovies] = useState([]);
  const [savedShortMovies, setSavedShortMovies] = useState([]);
  const [savedMoviesId, setSavedMoviesId] = useState([]);
  const [shortMoviesStatus, setShortMoviesStatus] = useState(false);
  const [shortSavedMoviesStatus, setShortSavedMoviesStatus] = useState(false);
  const [moviesCounter, setMoviesCount] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [preloader, setPreloader] = useState(true);
  const [spinPreloader, setSpinPreloader] = useState(false);
  const [preloaderMessage, setPreloaderMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupError, setPopupError] = useState('');
  const [popupErrorMessage, setPopupErrorMessage] = useState('');
  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);

  function handleRegister(email, password, name) {
    return Auth.register(email, password, name)
      .then((res) => {
        if(res) {
          return Auth.authorize(email, password)
            .then(() => {
              setLoggedIn(true);
              history.push('/movies');
            })
            .catch((err) => {
              console.log(err);
            })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogin(email, password) {
    return Auth.authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogout() {
    Auth.signout()
      .then(() => {
        setLoggedIn(false);
        setMoviesToShow([]);
        setExtraMovies([]);
        setShowedMovies([]);
        setShortMovies([]);
        setExtraShortMovies([]);
        setSavedMovies([]);
        setSavedShowedMovies([]);
        setSavedFoundMovies([]);
        setSavedShortMovies([]);
        setSavedMoviesId([]);
        setShortMoviesStatus(false);
        setShortSavedMoviesStatus(false);
        setMoviesCount([]);
        setSearchInputValue('');
        setPreloader(true);
        setSpinPreloader(false);
        setPreloaderMessage('');
        setIsPopupOpen(false);
        setPopupError('');
        setPopupErrorMessage('');
        localStorage.clear();
        history.push('/');
      })
      .catch((err) => {
        setIsPopupOpen(true);
        setPopupError(err.message.status);
        setPopupErrorMessage(err.error);
        console.log(err);
      });
  }

  function handleUpdateUser(user) {
    mainApi.editProfile(user.name, user.email)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        setIsPopupOpen(true);
        setPopupError(err.message.status);
        setPopupErrorMessage(err.error);
        console.log(err);
      });
  }

  function handleSearchAllMovies(inputSearchValue) {

    if (!inputSearchValue) {
      setPreloader(true);
      setPreloaderMessage('Нужно ввести ключевое слово');
      return;
    }

      setPreloaderMessage('');
      localStorage.setItem('inputSearchValue', inputSearchValue);
      localStorage.setItem('shortMoviesStatus', shortMoviesStatus);

      moviesApi.getMovies()
        .then(setSpinPreloader(true))
        .then((res) => {
          setPreloader(false);
          setPreloaderMessage('');
          setSpinPreloader(false)

          const foundMovies = res.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearchValue.toLowerCase()));
          localStorage.setItem('foundMovies', JSON.stringify(foundMovies)); 

          if(foundMovies.length === 0) {
            setPreloader(true);
            setPreloaderMessage('Ничего не найдено');
            localStorage.setItem('preloader', 'true');
            localStorage.setItem('preloaderMessage', 'Ничего не найдено');
          }

          const shortFoundMovies = foundMovies.filter(movie => movie.duration <= shortFilmDuration);

          const splicedMovies = foundMovies.splice(0, moviesCounter[0]);
          setMoviesToShow(splicedMovies);
          localStorage.setItem('moviesToShow', JSON.stringify(splicedMovies));

          setExtraMovies(foundMovies);
          localStorage.setItem('extraMovies', JSON.stringify(foundMovies));

          const splicedShortMovies = shortFoundMovies.splice(0, moviesCounter[0]);
          setShortMovies(splicedShortMovies);
          localStorage.setItem('shortMovies', JSON.stringify(splicedShortMovies));

          setExtraShortMovies(shortFoundMovies);
          localStorage.setItem('extraShortMovies', JSON.stringify(shortFoundMovies));

          if(!shortMoviesStatus) {
            setShowedMovies(splicedMovies);
            localStorage.setItem('showedMovies', JSON.stringify(splicedMovies));
          } else {
            setShowedMovies(splicedShortMovies);
            localStorage.setItem('showedMovies', JSON.stringify(splicedShortMovies));
          }
        })
        .catch((err) => {
          console.log(err);
          setPreloaderMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');

          setMoviesToShow([]);
          setExtraMovies([]);
          setShowedMovies([]);
          setShortMovies([]);
          setShortMovies([]);
          setExtraShortMovies([]);

          localStorage.clear();
      });
  }

  function handleSearchSavedMovies (inputSearchValue) {
    if (!inputSearchValue) {
      setPreloader(true);
      setPreloaderMessage('Нужно ввести ключевое слово');
      return;
    }  

    setPreloader(false);
    setPreloaderMessage('');

    const savedFoundMoviesConst = savedMovies.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearchValue.toLowerCase()));

    setSavedFoundMovies(savedFoundMoviesConst);

    if(savedFoundMoviesConst.length === 0) {
      setPreloader(true);
      setPreloaderMessage('Ничего не найдено');
    }

    const savedShortFoundMovies = savedFoundMoviesConst.filter(movie => movie.duration <= shortFilmDuration);
    setSavedShortMovies(savedShortFoundMovies);

    if(shortSavedMoviesStatus && savedShortFoundMovies.length === 0) {
      setPreloader(true);
      setPreloaderMessage('Ничего не найдено');
    }

    if(!shortSavedMoviesStatus) {
      setSavedShowedMovies(savedFoundMoviesConst);
    } else {
      setSavedShowedMovies(savedShortFoundMovies);
    }
  }

  function handleFilterShortAllMovies(shortMoviesSwitch) {

      setShortMoviesStatus(shortMoviesSwitch);
      if (shortMoviesSwitch) {
        setShowedMovies(shortMovies);
        localStorage.setItem('shortMoviesStatus', true);
      } else {
        setShowedMovies(moviesToShow);
        localStorage.setItem('shortMoviesStatus', false);
      }
  }
  function handleFilterShortSavedMovies (shortMoviesSwitch) {  
    setShortSavedMoviesStatus(shortMoviesSwitch);
    if (shortMoviesSwitch) {
      setSavedShowedMovies(savedShortMovies);
      if(savedShortMovies.length === 0) {
        setPreloader(true);
        setPreloaderMessage('Ничего не найдено');
      }
    } else {
      setPreloader(false);
      setPreloaderMessage('');
      (savedFoundMovies.length > 0)
        ? setSavedShowedMovies(savedFoundMovies)
        : setSavedShowedMovies(savedMovies);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleCountMovies() {
    let countCards;
    const moviesCounterConfig = {
      '1280': [moviesShow1280, moviesMore1280],
      '768': [moviesShow768, moviesMore768],
      '320': [moviesShow320, moviesMore320],
    };

    Object.keys(moviesCounterConfig)
      .sort((a, b) => a - b)
      .forEach((key) => {
        if (screenWidth >= key) {
          countCards = moviesCounterConfig[key];
        }
      });

    return countCards;
  }

  function handleShowMore() {
    if(!shortMoviesStatus) {
      const splicedMovies = extraMovies;
      const newShowedMovies = showedMovies.concat(splicedMovies.splice(0, moviesCounter[1]));
      setShowedMovies(newShowedMovies);
      localStorage.setItem('showedMovies', JSON.stringify(newShowedMovies));
      setMoviesToShow(newShowedMovies);
      localStorage.setItem('moviesToShow', JSON.stringify(newShowedMovies));
      setExtraMovies(splicedMovies);
      localStorage.setItem('extraMovies', JSON.stringify(splicedMovies));
    } else {
      const splicedShortMovies = extraShortMovies;
      const newShowedShortMovies = shortMovies.concat(splicedShortMovies.splice(0, moviesCounter[1]));
      setShowedMovies(newShowedShortMovies);
      localStorage.setItem('showedMovies', JSON.stringify(newShowedShortMovies));
      setExtraShortMovies(splicedShortMovies);
      localStorage.setItem('extraShortMovies', JSON.stringify(splicedShortMovies));
    }
  }

  function handleSaveMovie(movie) {
    if(!savedMoviesId.includes(movie.movieId || movie.id)){
      const movieData = {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      };

      mainApi.saveMovie(movieData)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
          setSavedShowedMovies([res, ...savedMovies]);
          setSavedMoviesId([res.movieId, ...savedMoviesId]);
        })
        .catch((err) => {
          setIsPopupOpen(true);
          setPopupError(err.message.status);
          setPopupErrorMessage(err.error);
          console.log(err);
      });
    }
  }

  function handleDeleteMovie(movie) {

    const currentId = movie.id || movie.movieId;
    mainApi.deleteMovie(currentId)
    .then(() => {
      setSavedMovies((prevState) => prevState.filter((item) => item.movieId !== currentId));
      setSavedShowedMovies((prevState) => prevState.filter((item) => item.movieId !== currentId));
      setSavedMoviesId((prevState) => prevState.filter((item) => item !== currentId));
    })
    .catch((err) => {
      setIsPopupOpen(true);
      setPopupError(err.message.status);
      setPopupErrorMessage(err.error);
      console.log(err);
    });
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    if(!loggedIn) return;
    mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        setIsPopupOpen(true);
        setPopupError(err.message.status);
        setPopupErrorMessage(err.error);
        console.log(err);
      });
  }, [loggedIn]);

  useEffect(() => {
    if(currentRoute.pathname === '/movies' || currentRoute.pathname === '/saved-movies') {
      mainApi.getMovies()
        .then((res) => {
          const owned = res.filter((item) => item.owner === currentUser._id);
          setSavedMovies(owned);
          setSavedShowedMovies(owned);
          setSavedMoviesId(owned.map(elem => elem.movieId));
          setSavedShortMovies(owned.filter(movie => movie.duration <= shortFilmDuration));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const localFoundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    const localMoviesToShow = JSON.parse(localStorage.getItem('moviesToShow'));
    const localExtraMovies = JSON.parse(localStorage.getItem('extraMovies'));
    const localShowedMovies = JSON.parse(localStorage.getItem('showedMovies'));
    const localShortMovies = JSON.parse(localStorage.getItem('shortMovies'));
    const localExtraShortMovies = JSON.parse(localStorage.getItem('extraShortMovies'));

    const localStorageInputSearchValue = localStorage.getItem('inputSearchValue');
    const localStorageShortMoviesStatus = localStorage.getItem('shortMoviesStatus');

    if(localFoundMovies === null) {
      setPreloader(true);
      return;
    } else {
      setPreloader(false);
      setPreloaderMessage('');
      setMoviesToShow(localMoviesToShow);
      setExtraMovies(localExtraMovies);
      setShowedMovies(localShowedMovies);
      setShortMovies(localShortMovies);
      setExtraShortMovies(localExtraShortMovies);
    }

    if (localStorageShortMoviesStatus === 'true') {
      setShortMoviesStatus(localStorageShortMoviesStatus === 'true');
      setShowedMovies(localShortMovies);
      localStorage.setItem('shortMoviesStatus', true);
    } else {
      setShowedMovies(localShowedMovies);
      localStorage.setItem('shortMoviesStatus', false);
    }

    if (localStorageInputSearchValue) {
      setSearchInputValue(localStorageInputSearchValue);
    }

    if(currentRoute.pathname === '/movies' && showedMovies.length === 0) {
      setPreloader(true);
      setPreloaderMessage('Ничего не найдено');
    }
  }, [currentRoute.pathname, currentUser]);

  useEffect(() => {
    setMoviesCount(handleCountMovies());
    const handleResize = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [currentRoute.pathname, shortSavedMoviesStatus]);

  useEffect(() => {
    if(currentRoute.pathname === '/saved-movies' && savedShowedMovies.length > 0) {
      setPreloader(false);
      setPreloaderMessage('');
    }
  }, [currentRoute.pathname, handleCountMovies, savedShowedMovies]);
  
  useEffect(() => {
    function checkToken() {
      return Auth.getContent()
        .then((res) => {
          if(res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }

    checkToken();
  }, [])


  
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header main={true} />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} path="/movies">
          <Header loggedIn={loggedIn}/>
          <Movies 
            showMore={handleShowMore}
            moviesRemains={extraMovies}
            shortMoviesRemains = {extraShortMovies}
            showedMovies={showedMovies}
            shortMoviesStatus={shortMoviesStatus}
            searchMovies={handleSearchAllMovies}
            searchInputValue={searchInputValue}
            preloader={preloader}
            preloaderMessage={preloaderMessage}
            spinPreloader={spinPreloader}
            filterShortMovies={handleFilterShortAllMovies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
            savedMovies={savedMovies}
            savedMoviesId={savedMoviesId}/>
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/saved-movies">
          <Header loggedIn={loggedIn}/>
          <SavedMovies
          moviesRemains={[]}
          showedMovies={savedShowedMovies}
          searchMovies={handleSearchSavedMovies}
          searchInputValue={searchInputValue}
          preloader={preloader}
          preloaderMessage={preloaderMessage}
          spinPreloader={spinPreloader}
          filterShortMovies={handleFilterShortSavedMovies}
          savedMovies={savedMovies}
          savedMoviesId={savedMoviesId}
          handleDeleteMovie={handleDeleteMovie} 
          />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/profile">
          <Header loggedIn={loggedIn}/>
          <Profile onUpdateUser={handleUpdateUser} onLogout={handleLogout} />
        </ProtectedRoute>
        <Route path="/sign-up"> 
          <Register onRegister={handleRegister} />
        </Route>
        <Route path="/sign-in">
          {loggedIn && <Redirect to="/movies" />}
          <Login onLogin={handleLogin} /> 
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Popup
          isPopupOpen={isPopupOpen}
          popupError={popupError}
          popupErrorMessage={popupErrorMessage}
          closePopup={closePopup} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
