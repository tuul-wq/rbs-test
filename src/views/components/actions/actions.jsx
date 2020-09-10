import React from 'react';
import './actions.scss';

function Actions({ children }) {
  return (
    <div className="footer">
      {children}
    </div>
  )
}

export default Actions;
