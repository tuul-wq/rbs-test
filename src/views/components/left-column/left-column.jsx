import React from 'react';

import Options from './options';
import ProfileSelect from './profile-select';
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
