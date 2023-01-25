import { Link } from 'react-router-dom';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import '../AuthForm/AuthForm.css';
import { useFormWithValidation } from '../../utils/FormValidator';

function Register ({onRegister}){
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const {email, password, name} = values;
    if (!isValid) return;

    onRegister(email, password, name);
  }

  return(
    <section className="register">
      <AuthForm title="Добро пожаловать!" name="register" buttonText="Зарегистрироваться" onSubmit={handleSubmit} isValid={isValid} errors={errors}>
        <div className="authForm__children">
          <label className="authForm__label" htmlFor="name-input">Имя</label>
          <input type="name" name="name" id="name-input"
            className={`authForm__input ${errors.name ? 'authForm__input_type_error' : ''}`}
            value={values.name || ''} onChange={handleChange}
            placeholder="Имя" minLength="2" maxLength="30" required />
            <p className={`authForm__error ${isValid && "authForm__error_hidden"}`}>{errors.name || ''}</p>          
            <label className="authForm__label" htmlFor="email-input">E-mail</label>
          <input type="email" name="email" id="email-input"
            className={`authForm__input ${errors.email ? 'authForm__input_type_error' : ''}`}
            value={values.email || ''} onChange={handleChange}
            placeholder="E-mail" minLength="2" maxLength="30" required />
          <p className={`authForm__error ${!errors.email && "authForm__error_hidden"}`}>{errors.email || ''}</p>

          <label className="authForm__label" htmlFor="email-input">Пароль</label>
          <input type="password" name="password" id="password-input"
            className={`authForm__input ${errors.password ? 'authForm__input_type_error' : ''}`}
            value={values.password || ''} onChange={handleChange}
            placeholder="Пароль" required />
          <p className={`authForm__error ${isValid && "authForm__error_hidden"}`}>{errors.password || ''}</p>
        </div>
      </AuthForm>
      <p className="register__question">Уже зарегистрированы? <Link className="register__link" to="/sign-in">Войти</Link></p>
    </section>
  )
}

export default Register;
