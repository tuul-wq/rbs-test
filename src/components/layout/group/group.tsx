import React from 'react';
import './group.scss';

function Group({ legend, children }) {
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
