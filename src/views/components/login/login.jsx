import React, { useState } from 'react';
import './login.scss';

function Login({ onLogin }) {
  const [creds, setCreds] = useState({ login: '', password: '' });

  return (
    <div className="login">
      <label>
        <span class="hidden-visually">Login</span>
        <input type="text" placeholder="Login" value={1}/>
      </label>
      <label>
        <span class="hidden-visually">Password</span>
        <input type="password" placeholder="Password" value={2}/>
      </label>
      <button type="button" className="red" onClick={onLogin}>
        <i className="fas fa-sign-in-alt" />
      </button>
    </div>
  )
}

export default Login;
