import React from 'react';
import './input-row.scss';

function InputRow({ label, idFor, value, onInputChange }) {
  return (
    <div className="input-row">
      <label htmlFor={idFor} className="input-row__label">{label}</label>
      <input
        id={idFor}
        className="input-row__input"
        type="text"
        value={value}
        onChange={onInputChange}
      />
    </div>
  )
}

export default InputRow;
