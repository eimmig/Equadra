import React, { useEffect, useState } from 'react';
import AuthService from '../../services/Auth/auth.service';
import ButtonWithProgress from '../../components/buttonWithProgress';
import Input from '../../components/input';
import { Link } from 'react-router-dom';
import './LoginPage.css';

export const LoginPage = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState();
  const [pendingApiCall, setPendingApiCall] = useState(false);

  useEffect(() => {
    setApiError();
  }, [username, password]);

  const onClickLogin = () => {
    setPendingApiCall(true);
    const body = {
      username: username,
      password: password
    };
    AuthService.login(body).then((response) => {
      setPendingApiCall(false);
      window.location.reload();
    })
  }

  let disableSubmit = false;
  if (username === '') {
    disableSubmit = true;
  }
  if (password === '') {
    disableSubmit = true;
  }
  return (
    <div className="wrapperLogin">
    <div className="boxLogin">
        <form action="">
            <h1>Entrar</h1>
            <div className="usernameLogin">
                <Input type="text" placeholder="E-mail"  value={username}
                onChange={(event) => setUsername(event.target.value)}
                id="username"/>
                <i className="far fa-envelope"></i>
            </div>
            <div className="passwordLogin">
                <Input type="password" placeholder="Senha"  value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="password"/>
                <i className="fas fa-lock-open"></i>
            </div>
        </form>
        <button
            disabled={pendingApiCall || disableSubmit}
            onClick={onClickLogin}
             id="btnLogin" type="submit">Entrar</button>

             {props.pendingApiCall && (
            <div className="spinner-border text-light spinner-border-sm mr-sm-1"
                role="status">
                <span className="visually-hidden">Aguarde...</span>
            </div>
        )}

        <a href='/signup' className="btn btn-sm cadastrarLogin">Cadastre-se</a>
    </div>
</div>
  );
};

LoginPage.defaultProps = {};

export default LoginPage;