import React from 'react';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import withService from 'Components/hoc/withService';
import BaseButton from 'Components/ui/base-button/base-button';
import { addProfile, updateProfile, removeProfile } from 'Store/actions/storage';

function ProfileActions({
  isTemplateProfile, hasValues, onAddProfile, onUpdateProfile, onRemoveProfile
}) {
  const actions = isTemplateProfile
    ? <BaseButton title="Добавить профиль" disabled={!hasValues} onClicked={onAddProfile} />
    : <>
      <BaseButton title="Обновить профиль" onClicked={onUpdateProfile} />
      <BaseButton title="Удалить профиль" onClicked={onRemoveProfile} />
    </>;

  return (
    <div className="action-group">{actions}</div>
  )
}

function mapStateToProps({ storage }) {
  const { selectedIndex, profiles } = storage;
  const { profileId, profileName, ...restParams } = profiles[selectedIndex];
  const hasValues = profileName.length >= 3 && Object.values(restParams).some(Boolean);
  return {
    isTemplateProfile: selectedIndex === 0,
    hasValues
  }
}

function mapDispatchToProps(dispatch, { service }) {
  return bindActionCreators({
    onAddProfile: addProfile(service),
    onUpdateProfile: updateProfile(service),
    onRemoveProfile: removeProfile(service)
  }, dispatch)
}

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileActions);
