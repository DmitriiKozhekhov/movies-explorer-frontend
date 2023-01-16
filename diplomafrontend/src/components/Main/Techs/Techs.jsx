import React from "react";
import './Techs.css';

function Techs (){

  return(
    <section className="techs">
      <div className="techs__header">
        <h3 className="techs__headerTitle">Технологии</h3>
      </div>
      <div className="techs__content">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__items">
        <li className="techs__item">
          <p className="techs__techName">HTML</p>
        </li>
        <li className="techs__item">
          <p className="techs__techName">CSS</p>
        </li>
        <li className="techs__item">
          <p className="techs__techName">JS</p>
        </li>
        <li className="techs__item">
          <p className="techs__techName">React</p>
        </li>
        <li className="techs__item">
          <p className="techs__techName">Git</p>
        </li>
        <li className="techs__item">
          <p className="techs__techName">Express.js</p>
        </li>
        <li className="techs__item">
          <p className="techs__techName">mongoDB</p>
        </li>
      </ul>
    </section>
  )
}

export default Techs;

