import React from 'react';

import Group from 'Components/layout/group/group';
import InputRow from 'Components/ui/input-row/input-row';

function GroupRows({ groupName, fields, onInputChange }) {
  const inputChange = (label, value) => {
    onInputChange(label, value);
  }

  return (
    <Group legend={groupName}>
      {
        Object.entries(fields).map(([key, object], index) =>
          <InputRow
            key={key + index}
            label={object.label}
            idFor={key}
            value={object.value}
            onInputChange={inputChange}
          />
        )
      }
    </Group>
  )
}

export default GroupRows;
