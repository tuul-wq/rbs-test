import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import withService from '../../../components/hoc/withService';
import { loginUser, logoutUser } from '../../../store/actions/user';

function Auth({ isLoggedIn, login, email, onLogin, onLogout }) {
  const displayName = isLoggedIn ? `${login} (${email})` : 'Offline';

  const actions = isLoggedIn
    ? <button type="button" onClick={onLogout}>Выйти</button>
    : <button type="button" onClick={onLogin}>Войти</button>;

  return (
    <div className="auth">
      <span>{ displayName }</span>
      { actions }
    </div>
  )
}

function mapStateToProps({ user }) {
  return {
    isLoggedIn: user.isLoggedIn,
    login: user.login,
    email: user.email
  }
}

function mapDispatchToProps(dispatch, { service }) {
  return bindActionCreators({
    onLogin: loginUser(service),
    onLogout: logoutUser(service)
  }, dispatch);
}

export default compose(
  withService(true),
  connect(mapStateToProps, mapDispatchToProps)
)(Auth);
