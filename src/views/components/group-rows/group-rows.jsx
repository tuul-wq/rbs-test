import React from 'react';

import Group from '../../../components/layout/group/group';
import InputRow from '../../../components/ui/input-row/input-row';
import './group-rows.scss';

function GroupRows({ groupName, fields, onInputChange }) {
  const inputChange = (label) => (value) => {
    onInputChange(label, value);
  }

  return (
    <div className="group-rows">
      <Group legend={groupName}>
        {
          Object.entries(fields).map(([key, object], index) =>
            <InputRow
              key={key + index}
              label={object.label}
              idFor={key}
              value={object.value}
              onInputChange={inputChange(key)}
            />
          )
        }
      </Group>
    </div>
  )
}

export default GroupRows;