import React from "react";
import './Preloader.css';

function Preloader ({preloader, preloaderMessage, spinPreloader}){

  return(
    <section className={`${preloader && "preloader"}`}>
      <p className="preloader__text">{preloaderMessage}</p>
      <div className={`${spinPreloader && "lds-hourglass"}`}></div>
    </section>
  )
}

export default Preloader;