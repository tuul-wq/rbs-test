import React from 'react';
import './base-select.scss';

function BaseSelect({ options, label, idFor, index, onInputChange }) {
  const onValueSelected = (event) => {
    onInputChange(parseInt(event.target.value));
  }

  return (
    <div className="select-row">
      <label className="select-row__label" htmlFor={idFor}>{label}</label>
      <select
        id={idFor}
        className="select-row__select"
        value={index}
        onChange={onValueSelected}
      >
        {
          options.map((option, index) =>
            <option key={option + index} value={index}>{option}</option>
          )
        }
      </select>
    </div>
  )
}

export default BaseSelect;
