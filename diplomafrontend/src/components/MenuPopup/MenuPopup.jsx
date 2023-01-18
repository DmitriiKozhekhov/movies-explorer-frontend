import React from "react";
import { Link } from 'react-router-dom';
import './MenuPopup.css';

function MenuPopup({isOpen, onClose}) {
  return (
    <div className={`menuPopup ${isOpen && "menuPopup_open"}`}>
      <div className="menuPopup__cover"></div>
      <button className="menuPopup__closeButton" onClick={onClose}></button>
      <div className="menuPopup__nav">
        <ul className="menuPopup__links">
          <Link to="/" className="menuPopup__link">Главная</Link>
          <Link to="/movies" className="menuPopup__link">Фильмы</Link>
          <Link to="/saved-movies" className="menuPopup__link">Сохранённые фильмы</Link>
        </ul>
        <Link to="/profile" className="menuPopup__link">
          <button className="menuPopup__profileButton">Аккаунт</button>
        </Link>
      </div>
    </div>
  )
}

export default MenuPopup;
