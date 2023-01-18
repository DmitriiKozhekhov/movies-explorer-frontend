import { Link } from 'react-router-dom';
import '../AuthForm/AuthForm.css';
import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../utils/FormValidator';
import './Login.css';

function Login ({onLogin}){
  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    const {email, password} = values;
    if (!isValid) return;

    onLogin(email, password);
  }

  return(
    <section className="login">
      <AuthForm title="Рады видеть!" name="register" buttonText="Войти" onSubmit={handleSubmit} isValid={isValid} >
        <div className="authForm__children">
          <label className="authForm__label" htmlFor="email-input">E-mail</label>
          <input type="email" name="email" id="email-input"
            className={`authForm__input ${errors.email ? 'authForm__input_type_error' : ''}`}
            value={values.email || ''} onChange={handleChange}
            placeholder="E-mail" minLength="2" maxLength="30" required />
          <p className={`authForm__error ${isValid && "authForm__error_hidden"}`}>{errors.email || ''}</p>

          <label className="authForm__label" htmlFor="email-input">Пароль</label>
          <input type="password" name="password" id="password-input"
            className={`authForm__input ${errors.password ? 'authForm__input_type_error' : ''}`}
            value={values.password || ''} onChange={handleChange}
            placeholder="Пароль" required />
          <p className={`authForm__error ${isValid && "authForm__error_hidden"}`}>{errors.password || ''}</p>
        </div>
      </AuthForm>
      <p className="login__question">Ещё не зарегистрированы? <Link className="login__link" to="/sign-up">Регистрация</Link></p>
    </section>
  )
}

export default Login;
