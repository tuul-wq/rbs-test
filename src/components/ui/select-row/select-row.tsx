import React, { ChangeEvent } from 'react';
import './select-row.scss';

interface ISelectRow {
  label: string;
  idFor: string;
  index: string | number;
  options: {
    id: string;
    name: string;
  }[];
  onInputChange: (input: number) => void;
}

function SelectRow({
  options, label, idFor, index, onInputChange
}: ISelectRow) {
  const onValueSelected = (event: ChangeEvent<HTMLSelectElement>) => {
    onInputChange(parseInt(event.currentTarget.value));
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
          options.map((option, index: number) =>
            <option key={option.id} value={index}>{option.name}</option>
          )
        }
      </select>
    </div>
  )
}

export default React.memo(SelectRow);
