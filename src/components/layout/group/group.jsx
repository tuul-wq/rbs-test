import React from 'react';
import './group.scss';

function Group({ legend, children }) {
  return (
    <fieldset className="group">
      <legend className="group__legend">{legend}</legend>
      { children }
    </fieldset>
  )
}

export default Group;
