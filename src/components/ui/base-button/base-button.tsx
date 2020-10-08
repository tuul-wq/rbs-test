import React from 'react';
import './base-button.scss';

interface IBaseButtonProps {
  title: string
  disabled?: boolean
  onClicked: () => void
}

function BaseButton({ title, disabled, onClicked }: IBaseButtonProps) {
  return (
    <button disabled={disabled} type="button" className="base-button" onClick={onClicked}>
      {title}
    </button>
  )
}

export default BaseButton;
