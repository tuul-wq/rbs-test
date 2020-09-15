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

export const EMPTY_PROFILE = () => ({
  profileId: nanoid(),
  profileName: 'New Profile',
  systemAddress: '',
  userName: '',
  password: '',
  currency: '',
  numberInSystem: '',
  orderSum: '',
  language: '',
  returnAddress: '',
  orderDescription: '',
  clientId: '',
  bondId: ''
});

export const storageInitialStore = {
  selectedName: '',
  selectedIndex: 0,
  profiles: [EMPTY_PROFILE()]
};

export default updateStorage;
