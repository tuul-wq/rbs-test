import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import withService from '../../../components/hoc/withService';
import { loginUser, logoutUser } from '../../../store/actions/user';
import './auth.scss';

function Auth({ isLoggedIn, login, email, onLogin, onLogout }) {
  const displayName = isLoggedIn ? `${login} (${email})` : 'Offline';

  const actions = isLoggedIn
    ? <button type="button" className="red" onClick={onLogout}>
        <i className="fas fa-sign-out-alt" />
        <span className="auth__btn-title">Выйти</span>
      </button>
    : <button type="button" className="blue" onClick={onLogin}>
        <i className="fas fa-sign-in-alt" />
        <span className="auth__btn-title">Войти</span>
      </button>;

  return (
    <div className="auth">
      <span className="auth__title">{ displayName }</span>
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
  connect(mapStateToProps, mapDispatchToProps),
)(Auth);
