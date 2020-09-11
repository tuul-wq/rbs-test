import React from 'react';
import './base-button.scss';

function BaseButton({ title, disabled, onClicked }) {
  return (
    <button disabled={disabled} type="button" className="btn" onClick={onClicked}>
      {title}
    </button>
  )
}

export default BaseButton;
