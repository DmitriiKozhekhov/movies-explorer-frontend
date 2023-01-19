import { useEffect, useContext } from 'react';
import './Profile.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/FormValidator';

function Profile ({onUpdateUser, onLogout}){
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const notValidForm = !isValid || (currentUser.name === values.name && currentUser.email === values.email);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    onUpdateUser(values);
  }
  return(
    <main className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form" name="profileForm" onSubmit={handleSubmit}>
      <div className="profile__formInputGroup">
          <label className="profile__formInputLabel" htmlFor="name-input">Имя</label>
          <input type="text" name="name" id="name-input"
            className={`profile__formInput ${errors.name ? 'profile__formInput_type_error' : ''}`}
            onChange={handleChange} value={values.name || ''}
            placeholder="Имя" required />
          <p className={`profile__error ${isValid && "profile__error_hidden"}`}>{errors.password || ''}</p>

        </div>
        <div className="profile__formInputGroup">
          <label className="profile__formInputLabel" htmlFor="email-input">E-mail</label>
          <input type="email" name="email" id="email-input"
            className={`profile__formInput ${errors.email ? 'profile__formInput_type_error' : ''}`}
            onChange={handleChange} value={values.email || ''}
            placeholder="E-mail" minLength="2" maxLength="30" required />
          <p className={`profile__error ${isValid && "profile__error_hidden"}`}>{errors.password || ''}</p>

        </div>
      <button type="submit" disabled={notValidForm}
        className={`profile__buttonEdit ${notValidForm && "profile__buttonEdit_inactive"}`}>Редактировать</button>
      <button className="profile__buttonLogout" onClick={onLogout}>Выйти из аккаунта</button>
      </form>
    </main>
  )
}

export default Profile;