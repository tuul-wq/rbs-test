import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import Status from './status';
import Login from './login';
import withService from 'Components/hoc/withService';
import { loginUser, logoutUser, resetLoginError } from 'Store/actions/user';

function AuthContainer({ onLogin, onLogout, onErrorReset, ...user}) {
  const [formActive, setFormActive] = useState(false);

  const showForm = () => setFormActive(!formActive);

  const logOut = () => {
    setFormActive(false);
    onLogout();
  }

  const noActions = () => {
    setFormActive(false);
    onErrorReset();
  }

  const statusProps = {
    ...user,
    showForm,
    onLogout: logOut,
    displayName: user.isLoggedIn ? `${user.login} (${user.email || 'no email'})` : 'Offline'
  }

  const loginProps = {
    onLogin,
    hasError: user.hasError,
    onNoActions: noActions
  }

  return !user.isLoggedIn && formActive
    ? <Login {...loginProps} />
    : <Status {...statusProps} />
}

function mapStateToProps({ user }) {
  return {
    isLoggedIn: user.isLoggedIn,
    login: user.login,
    email: user.email,
    hasError: user.hasError
  }
}

function mapDispatchToProps(dispatch, { service }) {
  return bindActionCreators({
    onLogout: logoutUser(service),
    onLogin: loginUser(service),
    onErrorReset: resetLoginError
  }, dispatch);
}

export default compose(
  withService(true),
  connect(mapStateToProps, mapDispatchToProps),
)(AuthContainer);
