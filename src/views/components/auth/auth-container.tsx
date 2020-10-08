import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction, bindActionCreators, compose, Dispatch } from 'redux';

import Status from './status';
import Login from './login';
import withService from 'Components/hoc/with-service';
import { AppState } from 'Store/store';
import { IAuth } from 'Services/api.service';
import { loginUser, logoutUser, resetLoginError } from 'Store/actions/user-actions';

function AuthContainer({
  user, onLogin, onLogout, onErrorReset
}: PropsFromRedux) {
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
    showForm,
    onLogout: logOut,
    isLoggedIn: user.isLoggedIn,
    displayName: user.isLoggedIn
      ? `${user.login} (${user.email || 'no email'})`
      : 'Offline'
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

function mapStateToProps({ user }: AppState) {
  return { user };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>, ownProps: { service: IAuth }) {
  return bindActionCreators({
    onLogout: logoutUser(ownProps.service),
    onLogin: loginUser(ownProps.service),
    onErrorReset: resetLoginError
  }, dispatch);
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default compose(
  withService(true),
  connector,
)(AuthContainer);
