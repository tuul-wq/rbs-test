import React from 'react';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import withService from '../../../components/hoc/withService';
import BaseButton from '../../../components/ui/base-button/base-button';
import { addProfile, updateProfile, removeProfile } from '../../../store/actions/storage';

function ProfileActions({ isTemplateProfile, onAddProfile, onUpdateProfile, onRemoveProfile }) {
  const actions = isTemplateProfile
    ? <BaseButton title="Добавить профиль" onClicked={onAddProfile} />
    : <>
      <BaseButton title="Обновить профиль" onClicked={onUpdateProfile} />
      <BaseButton title="Удалить профиль" onClicked={onRemoveProfile} />
    </>;

  return (
    <div className="action-group">
      {actions}
    </div>
  )
}

function mapStateToProps({ storage }) {
  const { selectedIndex } = storage;
  return {
    isTemplateProfile: selectedIndex === 0
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