import React from "react";
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <h6 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h6>
      <div className="footer__line"></div>
      <div className="footer__info">
        <p className="footer__text footer__text_content_copy">© 2022</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="https://practicum.yandex.ru" className="footer__anchor" target="_blank" rel="noreferrer">
              <p className="footer__text">Яндекс.Практикум</p>
            </a>
          </li>
          <li className="footer__link">
            <a href="https://github.com/DmitriiKozhekhov" className="footer__anchor" target="_blank" rel="noreferrer">
              <p className="footer__text">Github</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
