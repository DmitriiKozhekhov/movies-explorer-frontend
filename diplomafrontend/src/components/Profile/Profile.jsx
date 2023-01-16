import React from "react";
import './Profile.css';

function Profile (){
  const name = "Дмитрий";
  const email = "dmitrii@yandex.ru";
  return(
    <main className="profile">
      <h1 className="profile__title">Привет, {name}!</h1>
      <form className="profile__form" name="profileForm">
        <div className="profile__formInputGroup">
          <label className="profile__formInputLabel" for="name-input">Имя</label>
          <input type="text" name="profileName" id="name-input" className="profile__formInput profile__formInput_content_name"
          value={name}
          placeholder="Имя" required />
        </div>
        <div className="profile__formInputGroup">
          <label className="profile__formInputLabel" for="email-input">E-mail</label>
          <input type="email" name="email" id="email-input" className="profile__formInput profile__formInput_content_email"
            value={email}
            placeholder="E-mail" minLength="2" maxLength="30" required />
        </div>
      </form>
      <button className="profile__buttonEdit">Редактировать</button>
      <button className="profile__buttonLogout">Выйти из аккаунта</button>
    </main>
  )
}

export default Profile;
