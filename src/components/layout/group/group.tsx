import React from 'react';
import './group.scss';

interface IGroupProps {
  legend: string;
  children: React.ReactNode;
}

function Group ({ legend, children }: IGroupProps) {
  return (
    <fieldset className="group">
      <legend>{legend}</legend>
      <div className="group__content">
        { children }
      </div>
    </fieldset>
  )
}

export default Group;
