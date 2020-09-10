import React from 'react';
import './base-select.scss';

function BaseSelect({ label, idFor, value, onInputChange }) {
  return (
    <div className="select-row">
      <label className="select-row__label" htmlFor={idFor}>{label}</label>
      <select className="select-row__select" id={idFor}>
        <option selected value=""></option>
        <option value="test_1">test 1</option>
        <option value="test_2">test 2</option>
      </select>
    </div>
  )
}

export default BaseSelect;
