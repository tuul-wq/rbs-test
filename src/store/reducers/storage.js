import { nanoid } from 'nanoid';

import {
    PARAM_UPDATED, PROFILE_ADDED, PROFILE_SELECTED,
    PROFILE_UPDATED, PROFILE_REMOVED, PROFILES_LOADED
  } from '../actions/storage';

function updateStorage(state, { type, payload }) {
  const { storage } = state;
  const { selectedIndex, profiles } = storage;

  switch(type) {
    case PROFILE_ADDED:
      const { profileName } = profiles[selectedIndex];
      return {
        selectedIndex: 1,
        selectedName: profileName,
        profiles: [payload.cleanProfile].concat(profiles)
      }
    case PROFILE_SELECTED:
      return {
        ...storage,
        selectedIndex: payload.profileIndex,
        selectedName: profiles[payload.profileIndex].profileName
      }
    case PROFILE_REMOVED:
      const { profileIndex } = payload;
      const newProfiles = profiles.filter((_, index) => index !== profileIndex);
      const newIndex = newProfiles.length - 1 >= profileIndex ? profileIndex : profileIndex - 1;
      return {
        profiles: newProfiles,
        selectedIndex: newIndex,
        selectedName: newProfiles[newIndex].profileName
      };
    case PARAM_UPDATED:
      const currentIndex = profiles.findIndex((_, index) => index === selectedIndex);
      const updatedProfiles = profiles.map((profile, index) =>
          index === currentIndex ? { ...profile, [payload.paramName]: payload.value } : profile
      );
      return {
        ...storage,
        profiles: updatedProfiles
      };
    case PROFILES_LOADED:
      const newLoadedIndex = payload.profiles.findIndex(profile =>
        profile.profileId === profiles[selectedIndex].profileId
      );
      const newSelectedName = newLoadedIndex === -1
        ? payload.cleanProfile.profileName
        : payload.profiles[newLoadedIndex].profileName;
      return {
        selectedIndex: newLoadedIndex + 1,
        selectedName: newSelectedName,
        profiles: [payload.cleanProfile].concat(payload.profiles)
      };
    case PROFILE_UPDATED:
      return {
        ...storage,
        selectedName: profiles[payload.profileIndex].profileName
      }
    default:
      return storage;
  }
}

export const EMPTY_PROFILE = () => {
  var date = new Date();
  var sysNumber = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds']
    .map(method => date['get' + method]())
    .join('');
  return {
    profileId: nanoid(),
    profileName: 'New Profile',
    systemAddress: '/payment/',
    userName: 'test ',
    password: 'testPwd',
    currency: '643',
    numberInSystem: sysNumber,
    orderSum: '100',
    language: 'ru',
    returnAddress: '../merchants/test/finish.html',
    orderDescription: '',
    clientId: '',
    bondId: ''
  }
};
const date = new Date();
date.getUTCFullYear();

export const storageInitialStore = {
  selectedName: '',
  selectedIndex: 0,
  profiles: [EMPTY_PROFILE()]
};

export default updateStorage;
