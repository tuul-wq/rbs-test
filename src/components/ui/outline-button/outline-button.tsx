import React from 'react';
import classNames from 'classnames';

import './outline-button.scss';

function OutlineButton({ children, title, type = '', onClicked }) {
  const buttonClass = classNames({
    'button-outline': true,
    'red': type === 'red',
    'blue': type === 'blue',
  });

  return (
    <button type="button" className={buttonClass} onClick={onClicked}>
      {children}
      <span className="button-outline__title">{title}</span>
    </button>
  )
}

export default OutlineButton;
