import React from "react";
import './AboutMe.css';

function AboutMe (){
  return(
    <section className="aboutMe">
      <div className="aboutMe__header">
        <h3 className="aboutMe__headerTitle">Студент</h3>
      </div>
      <div className="aboutMe__content">
        <div className="aboutMe__info">
          <h2 className="aboutMe__name">Дмитрий</h2>
          <h3 className="aboutMe__about">Фронтенд-разработчик, 29 лет</h3>
          <p className="aboutMe__description">
            Я родился в городе Магдебург, в Германии. Но живу в Нижнем Новогроде. Закончил НИУ ВШЭ по направлению производственный менеджмент и логистика. Работаю в консалтинге.
            Всегда было интересно изучить программирование, поэтому я в Яндекс.Практикум!
          </p>
          <a href="https://github.com/DmitriiKozhekhov" className="aboutMe__gitHub" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="aboutMe__photo"></div>
      </div>
    </section>
  )
}

export default AboutMe;

