import React from 'react';
import './input-row.scss';

function InputRow({ label, idFor, value, onInputChange }) {
  const inputChange = (event) => {
    onInputChange(idFor, event.target.value);
  }

  return (
    <div className="input-row">
      <label htmlFor={idFor} className="input-row__label">{label}</label>
      <input
        id={idFor}
        className="input-row__input"
        type="text"
        value={value}
        onChange={inputChange}
      />
    </div>
  )
}

export default InputRow;
