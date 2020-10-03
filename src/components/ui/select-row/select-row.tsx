import React from 'react';
import './select-row.scss';

function SelectRow({ options, label, idFor, index, onInputChange }) {
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
            <option key={option.id} value={index}>{option.name}</option>
          )
        }
      </select>
    </div>
  )
}

export default React.memo(SelectRow);
