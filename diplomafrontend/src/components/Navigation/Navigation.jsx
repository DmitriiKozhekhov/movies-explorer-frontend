import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Navigation.css';
import MenuPopup from '../MenuPopup/MenuPopup';

function Navigation() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  function openMenu() {
    setIsMenuPopupOpen(true);
  }
  function closeMenu() {
    setIsMenuPopupOpen(false);
  }
  return (
        <Switch>
          <Route exact path="/">
          <div className="navigation navigation__route_main">
            <div className="navigation__links navigation__links_route_main">
              <Link to="/sign-up" className="navigation__link navigation__link_content_register navigation__link_color_white">Регистрация</Link>
              <Link to="/sign-in" className="navigation__link">
                <button className="navigation__button navigation__button_type_signin">Войти</button>
              </Link>
            </div>
            </div>
          </Route>
          <Route path="/movies">
          <div className="navigation navigation__route_notMain">
            <div className="navigation__links navigation__links_route_movies navigation__links_adress_notMain">
              <Link to="/movies" className="navigation__link navigation__link_route_notMain navigation__link_content_films navigation__link_color_black">Фильмы</Link>
              <Link to="/saved-movies" className="navigation__link navigation__link_route_notMain navigation__link_content_savedFilms navigation__link_color_black">Сохранённые фильмы</Link>
            </div>
              <Link to="/profile" className="navigation__link navigation__link_route_notMain">
                <button className="navigation__button navigation__button_type_profile"><div className='navigation__accountLogo'></div><p className='navigation__buttonText'>Аккаунт</p></button>
              </Link>
              <button className="navigation__menu navigation__button_type_menu" onClick={openMenu}></button>
            <MenuPopup isOpen={isMenuPopupOpen} onClose={closeMenu} />
            </div>
          </Route>
          <Route path="/saved-movies">
          <div className="navigation navigation__route_notMain">
            <div className="navigation__links navigation__links_route_movies navigation__links_adress_notMain">
              <Link to="/movies" className="navigation__link navigation__link_route_notMain navigation__link_content_films navigation__link_color_black">Фильмы</Link>
              <Link to="/saved-movies" className="navigation__link navigation__link_route_notMain navigation__link_content_savedFilms navigation__link_color_black">Сохранённые фильмы</Link>
            </div>
              <Link to="/profile" className="navigation__link navigation__link_route_notMain">
                <button className="navigation__button navigation__button_type_profile"><div className='navigation__accountLogo'></div><p className='navigation__buttonText'>Аккаунт</p></button>
              </Link>
              <button className="navigation__menu navigation__button_type_menu" onClick={openMenu}></button>
            <MenuPopup isOpen={isMenuPopupOpen} onClose={closeMenu} />
            </div>
          </Route>
          <Route path="/profile">
          <div className="navigation navigation__route_notMain">
            <div className="navigation__links navigation__links_route_movies navigation__links_adress_notMain">
              <Link to="/movies" className="navigation__link navigation__link_route_notMain navigation__link_content_films navigation__link_color_black">Фильмы</Link>
              <Link to="/saved-movies" className="navigation__link navigation__link_route_notMain navigation__link_content_savedFilms navigation__link_color_black">Сохранённые фильмы</Link>
            </div>
            <Link to="/profile" className="navigation__link navigation__link_route_notMain">
              <button className="navigation__button navigation__button_type_profile"><div className='navigation__accountLogo'></div><p className='navigation__buttonText'>Аккаунт</p></button>
            </Link>
            <button className="navigation__menu navigation__button_type_menu" onClick={openMenu}></button>
            <MenuPopup isOpen={isMenuPopupOpen} onClose={closeMenu} />
          </div>
          </Route>
        </Switch>
  )
}

export default Navigation;
