import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import withService from '../../../../components/hoc/withService';
import ProfileSelect from './profile-select';
import {
  selectProfile, updateProfileParam, getProfiles, syncStorages
} from '../../../../store/actions/storage';

class ProfileSelectContainer extends Component {
  componentDidMount() {
    this.props.loadProfiles();
    window.addEventListener('beforeunload', this.props.syncStorages);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      this.props.loadProfiles();
    }
  }

  componentWillUnmount() {
    this.props.syncStorages();
  }

  render() {
    return (
      <ProfileSelect {...this.props} />
    )
  }
}

function setupOptions(profiles, index, profileName) {
  return profiles.map((profile, idx) => {
    const name =
      (idx === 0 && 'New Profile') ||
      (idx === index && profileName) ||
      profile.profileName;
    return { id: profile.profileId, name };
  });;
}

function mapStateToProps({ storage, user }) {
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
    }
  }
}

function mapDispatchToProps(dispatch, { service }) {
  return bindActionCreators({
    onInputChange: updateProfileParam,
    onSelectProfile: selectProfile,
    loadProfiles: getProfiles(service),
    syncStorages: syncStorages(service)
  }, dispatch)
}

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileSelectContainer);
