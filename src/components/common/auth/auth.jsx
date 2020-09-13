import React, { useState } from 'react';
import withRbsService from '../../hoc/withRbsService';

function Auth({ service }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login() {
    try {
      await service.login();
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function logOut() {
    try {
      await service.logout();
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      { isLoggedIn
        ? <button type="button" onClick={logOut}>Выйти</button>
        : <button type="button" onClick={login}>Войти</button>
      }
    </div>
  )
}

export default withRbsService(Auth);
