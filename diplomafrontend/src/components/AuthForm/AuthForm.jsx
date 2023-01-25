import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

function AuthForm({title, name, buttonText, onSubmit, isValid, errors, children}) {
  return(
    <section className="authForm">
      <Link to="/" className="authForm__logo" />
      <h1 className="authForm__title">{title}</h1>
      <form className="authForm__form" name={name} onSubmit={onSubmit} >
        {children}
        <button type="submit" disabled={!isValid || errors.email} className={`authForm__button ${!isValid || errors.email ? "authForm__button_inactive" : ''}`}>{buttonText}</button>
      </form>
    </section>
  )
}

export default AuthForm;