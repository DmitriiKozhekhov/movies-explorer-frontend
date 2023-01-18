import React from "react";
import './NotFound.css';
import { useHistory } from 'react-router-dom';


function NotFound (){
  const history = useHistory();

  return(
    <main className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__subtitle">Страница не найдена</p>
      <button className="notFound__button" onClick={history.goBack}>Назад</button>
    </main>
  )
}
export default NotFound;


