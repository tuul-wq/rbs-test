import React from 'react';

import Options from './components/options';
import ProfileSelect from './components/profile-select-container';
import './left-column.scss';

function LeftColumn() {
  return (
    <div className="left-column">
      <ProfileSelect />
      <Options />
    </div>
  )
}

export default LeftColumn;
