import React from 'react';

import Group from 'Components/layout/group/group';
import InputRow from 'Components/ui/input-row/input-row';

export interface IFields {
  [key: string]: {
    label: string,
    value: string | number,
    options?: {
      id: string;
      name: string;
    }[]
  }
}
export interface IGroupRowsProps {
  groupName: string;
  fields: IFields;
  onInputChange: (label: string, value: string) => void;
}

function GroupRows({ groupName, fields, onInputChange }: IGroupRowsProps) {
  const inputChange = (label: string, value: string) => {
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
