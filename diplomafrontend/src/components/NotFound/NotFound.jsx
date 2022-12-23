import React from "react";
import './NotFound.css';
function NotFound (){
  return(
    <main className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
      <button className="notFound__button" >Назад</button>
    </main>
  )
}
export default NotFound;
