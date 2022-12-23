import React from "react";
import './AboutProject.css';
function AboutProject (){
  return(
    <section className="aboutProject">
      <div className="aboutProject__header">
        <h2 className="aboutProject__headerTitle">О проекте</h2>
      </div>
      <div className="aboutProject__info">
        <div className="aboutProject__infoBlock">
          <h2 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h2>
          <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__infoBlock">
          <h2 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h2>
          <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__timeline">
        <div className="aboutProfect__oneWeek">
          <div className="aboutProject__timelineBar aboutProject__timelineBar_type_short">
            <h3 className="aboutProject__timelineHeader ">1 неделя</h3>
          </div>
          <p className="aboutProject__timelineCaption">Back-end</p>
        </div>
        <div className="aboutProfect__fourWeeks">
          <div className="aboutProject__timelineBar aboutProject__timelineBar_type_long">
            <h3 className="aboutProject__timelineHeader">4 недели</h3>
          </div>
          <p className="aboutProject__timelineCaption">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;

