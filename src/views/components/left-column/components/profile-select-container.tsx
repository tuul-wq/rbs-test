import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction, bindActionCreators, compose, Dispatch } from 'redux';

import withService from 'Components/hoc/with-service';
import ProfileSelect, { IProfileSelectProps } from './profile-select';
import { IStorage } from 'Services/api.service';
import { IProfile } from 'Store/types/storage-types';
import { AppState } from 'Store/store';
import {
  selectProfile, updateProfileParam, getProfiles, syncStorages
} from 'Store/actions/storage-actions';
import { IFields } from 'Views/components/group-rows/group-rows';

function ProfileSelectContainer({
  isLoggedIn, loadProfiles, syncStorages, ...rest
}: PropsFromRedux) {

  useEffect(() => {
    window.addEventListener('beforeunload', syncStorages);
    return () => {
      window.removeEventListener('beforeunload', syncStorages);
    }
  }, []);

  useEffect(() => {
    loadProfiles();
    return () => {
      syncStorages();
    };
  }, [isLoggedIn]);

  return (
    <ProfileSelect {...rest} />
  )
}

function mapStateToProps({ storage, user }: AppState) {
  const { selectedIndex, selectedName, profiles } = storage;
  const current = profiles[selectedIndex];
  return {
    isLoggedIn: user.isLoggedIn,
    fields: {
      profileName: { label: 'Имя профиля', value: current.profileName },
      selectProfile: {
        label: 'Выберите профиль',
        value: selectedIndex,
        options: setupOptions(profiles, selectedIndex, selectedName)
      }
    } as IFields
  }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>, ownProps: { service: IStorage }) {
  return bindActionCreators({
    onInputChange: updateProfileParam,
    onSelectProfile: selectProfile,
    loadProfiles: getProfiles(ownProps.service),
    syncStorages: syncStorages(ownProps.service)
  }, dispatch)
}

function setupOptions(profiles: IProfile[], index: number, profileName: string) {
  return profiles.map((profile, idx: number) => {
    const name =
      (idx === 0 && 'New Profile') ||
      (idx === index && profileName) ||
      profile.profileName;
    return { id: profile.profileId, name };
  });
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default compose(
  withService(),
  connector
)(ProfileSelectContainer);
