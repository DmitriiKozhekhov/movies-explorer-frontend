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
            Я родился в городе Магдебург, в Германии. Но живу в Нижнем Новогроде. Закончил бакалавриат НИУ ВШЭ по направлению "Производственный менеджмент и логистика", а также магистратуру НИУ ВШЭ - "Стратегический менеджмент". Работаю в консалтинге. С командой занимаемся развитием своей компании в области it-решений для производственных предприятий.
            Всегда было интересно изучить программирование, к тому же, сейчас это мне необходимо для развития и понимания работы  веб-девелоперов. Поэтому я в Яндекс.Практикум!
          </p>
          <a href="https://github.com/DmitriiKozhekhov" className="aboutMe__gitHub" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="aboutMe__photo"></div>
      </div>
    </section>
  )
}

export default AboutMe;

