import React from 'react';

import InputRow from '../../../../components/ui/input-row/input-row';
import BaseSelect from '../../../../components/ui/base-select/base-select';
import ProfileActions from './profile-actions';
import Group from '../../../../components/layout/group/group';

function ProfileSelect({ fields, onInputChange, onSelectProfile }) {
  const inputChange = (label, value) => {
    onInputChange(label, value);
  }

  return (
    <Group legend="Сохраненные параметры">
      <BaseSelect
        label="Выберите профиль"
        idFor="selectProfile"
        options={fields.selectProfile.options}
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