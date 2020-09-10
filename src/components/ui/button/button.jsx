import React from 'react';
import './button.scss';

function Button({ title = 'Button', onClicked }) {
  return (
    <button type="button" className="btn" onClick={onClicked}>{title}</button>
  )
}

export default Button;
