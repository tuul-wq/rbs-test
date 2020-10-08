import React from 'react';
import { AnyAction, bindActionCreators, compose, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import withService from 'Components/hoc/with-service';
import BaseButton from 'Components/ui/base-button/base-button';
import { AppState } from 'Store/store';
import { IStorage } from 'Services/api.service';
import { addProfile, updateProfile, removeProfile } from 'Store/actions/storage-actions';

function ProfileActions({
  isDefaultProfile, hasValues, onAddProfile, onUpdateProfile, onRemoveProfile
}: PropsFromRedux ) {
  const actions = isDefaultProfile
    ? <BaseButton title="Добавить профиль" disabled={!hasValues} onClicked={onAddProfile} />
    : <>
      <BaseButton title="Обновить профиль" onClicked={onUpdateProfile} />
      <BaseButton title="Удалить профиль" onClicked={onRemoveProfile} />
    </>;

  return (
    <div className="action-group">{actions}</div>
  )
}

function mapStateToProps({ storage }: AppState) {
  const { selectedIndex, profiles } = storage;
  const { profileId, profileName, ...restParams } = profiles[selectedIndex];
  const hasValues = profileName.length >= 3 && Object.values(restParams).some(Boolean);
  return {
    isDefaultProfile: selectedIndex === 0,
    hasValues
  }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>, ownProps: { service: IStorage }) {
  return bindActionCreators({
    onAddProfile: addProfile(ownProps.service),
    onUpdateProfile: updateProfile(ownProps.service),
    onRemoveProfile: removeProfile(ownProps.service)
  }, dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default compose(
  withService(),
  connector
)(ProfileActions);
