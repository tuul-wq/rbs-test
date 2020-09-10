import React from 'react';
import './base-button.scss';

function BaseButton({ title = 'Button', onClicked }) {
  return (
    <button type="button" className="btn" onClick={onClicked}>{title}</button>
  )
}

export default BaseButton;
