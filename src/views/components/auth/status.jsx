import React from 'react';

import OutlineButton from 'Components/ui/outline-button/outline-button';
import './status.scss';

function Status({ isLoggedIn, displayName, onLogout, showForm }) {
  const actions = isLoggedIn
    ? <OutlineButton title="Выйти" type="red" onClicked={onLogout}>
        <i className="status__sign-out" />
      </OutlineButton>
    : <OutlineButton title="Войти" type="blue" onClicked={showForm}>
        <i className="status__sign-in" />
      </OutlineButton>;

  return (
    <div className="status">
      <span className="status__title">{displayName}</span>
      {actions}
    </div>
  )
}

export default Status;
