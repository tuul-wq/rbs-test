import React from 'react';

import OutlineButton from '../../../components/ui/outline-button/outline-button';
import './status.scss';

function Status({ isLoggedIn, displayName, onLogout, showForm }) {
  const actions = isLoggedIn
    ? <OutlineButton title="Выйти" type="red" onClicked={onLogout}>
        <i className="fas fa-sign-out-alt" />
      </OutlineButton>
    : <OutlineButton title="Войти" type="blue" onClicked={showForm}>
        <i className="fas fa-sign-in-alt" />
      </OutlineButton>;

  return (
    <div className="status">
      <span className="status__title">{displayName}</span>
      {actions}
    </div>
  )
}

export default Status;
