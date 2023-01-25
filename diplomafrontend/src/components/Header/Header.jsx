import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
function Header({main, loggedIn}) {
  return (
    <header className={`header ${main ? "header_adress_main":''}`}>
      <Link to="/" className="header__logo" />
      <Navigation loggedIn={loggedIn}/>
    </header>
  )
}

export default Header;
