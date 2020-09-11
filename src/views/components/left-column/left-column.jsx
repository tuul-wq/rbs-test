/* eslint-disable no-mixed-operators */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Group from '../../../components/layout/group/group';
import InputRow from '../../../components/ui/input-row/input-row';
import BaseSelect from '../../../components/ui/base-select/base-select';
import BaseButton from '../../../components/ui/base-button/base-button';
import {
  updateProfileParam, addNewProfile, selectProfile, updateProfile, removeProfile
} from '../../../store/actions';
import './left-column.scss';

function LeftColumn({
  topFields, bottomFields, onInputChange, onAddProfile,
  onSelectProfile, onUpdateProfile, onRemoveProfile
}) {
  const inputChange = (label) => (value) => {
    onInputChange(label, value);
  }

  const actions = topFields.selectProfile.value === 0
    ? <BaseButton title="Добавить профиль" onClicked={onAddProfile} />
    : <>
      <BaseButton title="Обновить профиль" onClicked={onUpdateProfile} />
      <BaseButton title="Удалить профиль" onClicked={onRemoveProfile} />
    </>;

  return (
    <div className="left-col">
      <Group legend="Сохраненные параметры">
        <BaseSelect
          label="Выберите профиль"
          idFor="selectProfile"
          options={topFields.selectProfile.options}
          index={topFields.selectProfile.value}
          onInputChange={onSelectProfile}
        />
        <InputRow
          label="Имя профиля"
          idFor="profileName"
          value={topFields.profileName.value}
          onInputChange={inputChange('profileName')}
        />
        <div className="action-group">{actions}</div>
      </Group>
      <Group legend="Параметры магазина">
        {
          Object.entries(bottomFields).map(([key, object], index) =>
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

function mapStateToProps({ currentProfileIndex, currentProfileName, profiles }) {
  const current = profiles[currentProfileIndex];
  return {
    topFields: {
      selectProfile: {
        label: 'Выберите профиль',
        value: currentProfileIndex,
        options: profiles.map((profile, index) =>
          index === 0 && 'New Profile' ||
          index === currentProfileIndex && currentProfileName ||
          profile.profileName
        )
      },
      profileName: { label: 'Имя профиля', value: current.profileName }
    },
    bottomFields: {
      systemAddress: { label: 'Адрес системы (используется только для запроса)', value: current.systemAddress },
      userName: { label: 'Имя пользователя магазина', value: current.userName },
      password: { label: 'Пароль магазина', value: current.password }
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onInputChange: updateProfileParam,
    onAddProfile: addNewProfile,
    onSelectProfile: selectProfile,
    onUpdateProfile: updateProfile,
    onRemoveProfile: removeProfile
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftColumn);
