import React from 'react';
import './outline-button.scss';

function OutlineButton({ children, title, type = '', onClicked }) {
  return (
    <button type="button" className={`button-outline ${type}`} onClick={onClicked}>
      {children}
      <span className="button-outline__title">{title}</span>
    </button>
  )
}

export default OutlineButton;
