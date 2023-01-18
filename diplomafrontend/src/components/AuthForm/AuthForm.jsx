import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

function AuthForm({title, name, buttonText, onSubmit, isValid, children}) {
  return(
    <section className="authForm">
      <Link to="/" className="authForm__logo" />
      <h1 className="authForm__title">{title}</h1>
      <form className="authForm__form" name={name} onSubmit={onSubmit} >
        {children}
        <button type="submit" disabled={!isValid} className={`authForm__button ${!isValid ? "authForm__button_inactive" : ''}`}>{buttonText}</button>
      </form>
    </section>
  )
}

export default AuthForm;