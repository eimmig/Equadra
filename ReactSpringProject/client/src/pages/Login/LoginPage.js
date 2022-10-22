import React, { useEffect, useState } from 'react';
import AuthService from '../../services/Auth/auth.service';
import ButtonWithProgress from '../../components/buttonWithProgress';
import Input from '../../components/input';
import { Link } from 'react-router-dom';

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
      <div style={{backgroundImage: "url(/background.jpg)", backgroundRepeat: 'no-repeat', backgroundSize: "cover", position: "revert",
          height: '100vh',
          width: '100vw' }}>
          <div style={{backgroundColor: "#323232f2", height: '100vh',
              width: '25vw'}}>
              <div className="container" style={{verticalAlign: "middle", position: "relative", display: "table-cell", height: '100vh',
                  width: '25vw'}}>
                  <div className="col-12 mb-3" >
                      <Input
                          placeholder="E-mail"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                      />
                  </div>
                  <div className="col-12 mb-3">
                      <Input
                          placeholder="Senha"
                          type="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                      />
                  </div>
                  {apiError && (
                      <div className="col-12 mb-3">
                          <div className="alert alert-danger">{apiError}</div>
                      </div>
                  )}

                  <div className="text-center">
                      <ButtonWithProgress
                          disabled={pendingApiCall || disableSubmit}
                          onClick={onClickLogin}
                          pendingApiCall={pendingApiCall}
                          text="Entrar"
                      />
                  </div>
                  <div className='text-center' style={{color: "white"}}>
                      Não possui cadastro? <Link to="/signup">Cadastre-se</Link>
                  </div>
              </div>
          </div>
      </div>
  );
};

LoginPage.defaultProps = {};

export default LoginPage;