import React from 'react';
import './AuthForm.css';
function AuthForm({title, name, buttonText, children}) {
  return(
    <section className="authForm">
      <div className="authForm__logo"></div>
      <h1 className="authForm__title">{title}</h1>
      <form className="authForm__form" name={name} >
        {children}
        <button type="submit" className={`authForm__button`}>{buttonText}</button>
      </form>
    </section>
  )
}

export default AuthForm;
