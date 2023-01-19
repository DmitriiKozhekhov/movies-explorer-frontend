import React from "react";
import './Popup.css';

function Popup ({
  isPopupOpen,
  popupError,
  popupErrorMessage,
  closePopup}){

  return(
    <div className={`popup ${isPopupOpen && "popup_open"}`}>
      <h1 className="popup__title">{popupError}</h1>
      <p className="popup__subtitle">{popupErrorMessage}</p>
      <button className="popup__button" onClick={closePopup} >Назад</button>
    </div>
  )
}

export default Popup;
