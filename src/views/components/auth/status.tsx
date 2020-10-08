import React from 'react';

import OutlineButton from 'Components/ui/outline-button/outline-button';
import './status.scss';

interface IStatusProps {
  isLoggedIn: boolean;
  displayName: string;
  showForm: () => void;
  onLogout: () => void;
}

function Status({ isLoggedIn, displayName, showForm, onLogout }: IStatusProps) {
  const btnConfig = {
    title: isLoggedIn ? 'Выйти' : 'Войти',
    type: isLoggedIn ? 'red' : 'blue',
    action: isLoggedIn ? onLogout : showForm,
    icon: isLoggedIn ? 'status__sign-out' : 'status__sign-in'
  }

  return (
    <div className="status">
      <span className="status__title">{displayName}</span>
      <OutlineButton title={btnConfig.title} type={btnConfig.type} onClicked={btnConfig.action}>
        <i className={btnConfig.icon} />
      </OutlineButton>
    </div>
  )
}

export default Status;
