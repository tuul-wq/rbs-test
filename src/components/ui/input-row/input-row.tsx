import React, { FormEvent } from 'react';
import './input-row.scss';

interface IInputRowProps {
  label: string;
  idFor: string;
  value: string | number;
  onInputChange: (id: string, value: string) => void;
}

function InputRow({ label, idFor, value, onInputChange }: IInputRowProps) {
  const inputChange = (event: FormEvent<HTMLInputElement>) => {
    onInputChange(idFor, event.currentTarget.value);
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

export default React.memo(InputRow);
