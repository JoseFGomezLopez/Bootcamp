/* eslint-disable jsx-a11y/anchor-is-valid */
import './loginFrom.css';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Logo from '../Logo/Logo';

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const onFormSubmit = (values) => {
    navigate('/dashboard');
    checked
      ? window.localStorage.setItem(values.userName, values.password)
      : localStorage.remove();
  };

  return (
    <section className="loginSectionForm">
      <div>
        <Logo className="logo" />
      </div>
      <form name="login" className="loginForm" onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor="userName">
          <span className="red">*</span>Nombre de usuario
        </label>
        <input
          name="userName"
          type="text"
          id="userName"
          className="inputLoginForm"
          {...register('userName', {
            required: true,
            minLength: 3,
          })}
        />
        <label htmlFor="password">
          <span className="red">*</span>Contraseña
        </label>
        <input
          name="password"
          type="password"
          id="password"
          className="inputLoginForm"
          {...register('password', {
            required: true,
            minLength: 6,
            pattern: /^\S*$/,
            validate: () => true,
          })}
        />
        <div className="chekboxAnchorContainer">
          <div className="checkboxContainer">
            <input id="checkbox" type="checkbox" onChange={() => setChecked(!checked)} />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <a href="#">Olvidé mi contraseña</a>
        </div>
        <input type="submit" value="Iniciar sesión" className="inputSubmitButton" />
      </form>
    </section>
  );
};

export default LoginForm;
