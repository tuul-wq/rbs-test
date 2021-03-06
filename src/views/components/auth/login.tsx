import React, { FormEvent, useEffect, useState } from 'react';
import classNames from 'classnames';

import OutlineButton from 'Components/ui/outline-button/outline-button';
import './login.scss';

interface ILoginProps {
  hasError: boolean;
  onNoActions: () => void;
  onLogin: (login: string, password: string) => void;
}

function Login({ hasError, onNoActions, onLogin }: ILoginProps) {
  const [creds, setCreds] = useState({ login: '', password: '' });

  const changeValue = (field: string) => (event: FormEvent<HTMLInputElement>) => {
    setCreds({ ...creds, [field]: event.currentTarget.value });
  }

  const login = () => {
    onLogin(creds.login, creds.password);
  }

  useEffect(() => {
    const timer = setTimeout(onNoActions, 15 * 1000);
    return () => {
      clearTimeout(timer);
    }
  });

  const inputClass = classNames({ 'error': hasError });

  return (
    <div className="login">
      <label>
        <span className="hidden-visually">Login</span>
        <input
          type="text"
          placeholder="Login"
          className={inputClass}
          value={creds.login}
          onChange={changeValue('login')}
        />
      </label>
      <label>
        <span className="hidden-visually">Password</span>
        <input
          type="password"
          placeholder="Password"
          className={inputClass}
          value={creds.password}
          onChange={changeValue('password')}
        />
      </label>
      <OutlineButton type="blue" onClicked={login}>
        <i className="status__sign-out" />
      </OutlineButton>
    </div>
  )
}

export default Login;
