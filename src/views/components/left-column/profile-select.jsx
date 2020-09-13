import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import withRbsService from '../../../components/hoc/withRbsService';
import InputRow from '../../../components/ui/input-row/input-row';
import BaseSelect from '../../../components/ui/base-select/base-select';
import ProfileActions from './profile-actions';
import Group from '../../../components/layout/group/group';
import { selectProfile, updateProfileParam } from '../../../store/actions/storage';

function ProfileSelect({ fields, onInputChange, onSelectProfile }) {
  const inputChange = (label) => (value) => {
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
        onInputChange={inputChange('profileName')}
      />
      <ProfileActions />
    </Group>
  )
}

function mapStateToProps({ storage }) {
  const { selectedIndex, selectedName, profiles } = storage;
  const current = profiles[selectedIndex];
  return {
    fields: {
      profileName: { label: 'Имя профиля', value: current.profileName },
      selectProfile: {
        label: 'Выберите профиль',
        value: selectedIndex,
        options: profiles.map((profile, index) =>
          (index === 0 && 'New Profile') ||
          (index === selectedIndex && selectedName) ||
          profile.profileName
        )
      }
    }
  }
}

// function mapDispatchToProps(dispatch, { service }) {
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onInputChange: updateProfileParam,
    onSelectProfile: selectProfile
  }, dispatch)
}

export default compose(
  withRbsService,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileSelect);