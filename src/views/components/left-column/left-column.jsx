import React from 'react';

import Options from './components/options';
import ProfileSelect from './components/profile-select-container';
import './left-column.scss';

function LeftColumn() {
  return (
    <div className="left-col">
      <ProfileSelect groupName="Сохраненные параметры" />
      <Options groupName="Параметры магазина" />
    </div>
  )
}

export default LeftColumn;
