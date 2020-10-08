import React from 'react';

import InputRow from 'Components/ui/input-row/input-row';
import SelectRow from 'Components/ui/select-row/select-row';
import Group from 'Components/layout/group/group';
import ProfileActions from './profile-actions';
import { IFields } from 'Views/components/group-rows/group-rows';

export interface IProfileSelectProps {
  fields: IFields;
  onInputChange: (paramName: string, value: string) => void;
  onSelectProfile: (profileIndex: number) => void;
}

function ProfileSelect({ fields, onInputChange, onSelectProfile }: IProfileSelectProps) {
  const inputChange = (label: string, value: string) => {
    onInputChange(label, value);
  }

  return (
    <Group legend="Сохраненные параметры">
      <SelectRow
        label="Выберите профиль"
        idFor="selectProfile"
        options={fields.selectProfile.options!}
        index={fields.selectProfile.value}
        onInputChange={onSelectProfile}
      />
      <InputRow
        label="Имя профиля"
        idFor="profileName"
        value={fields.profileName.value}
        onInputChange={inputChange}
      />
      <ProfileActions />
    </Group>
  )
}
 export default ProfileSelect;
