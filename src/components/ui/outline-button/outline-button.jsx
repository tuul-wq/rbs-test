import React from 'react';
import './outline-button.scss';

function OutlineButton({ children, title, type = '', onClicked }) {
  return (
    <button type="button" className={`btn-outline ${type}`} onClick={onClicked}>
      {children}
      <span className="btn-outline__title">{title}</span>
    </button>
  )
}

export default OutlineButton;
