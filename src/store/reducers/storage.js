import { nanoid } from 'nanoid';

import {
    PARAM_UPDATED, PROFILE_ADDED, PROFILE_SELECTED, PROFILES_LOADED,
    PROFILE_UPDATED, PROFILE_REMOVED, PROFILE_REMOVED_ALL
  } from '../actions/storage';

function updateStorage(state, { type, payload }) {
  const { storage } = state;
  const { selectedIndex, profiles } = storage;

  switch(type) {
    case PROFILE_ADDED:
      const { profileName, ...restParams } = profiles[selectedIndex];
      const isTouched = Object.values(restParams).some(Boolean);
      if (!isTouched) return storage;

      return {
          selectedIndex: 1,
          selectedName: profileName,
          profiles: [payload.cleanProfile].concat(profiles)
      }
    case PROFILE_SELECTED:
      return {
          ...(payload.profileIndex === 0
            ? { profiles: [payload.cleanProfile].concat(profiles.slice(1)) }
            : storage
          ),
          selectedName: profiles[payload.profileIndex].profileName,
          selectedIndex: payload.profileIndex,
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
    case PROFILE_REMOVED_ALL:
      return {
          selectedIndex: 0,
          selectedName: payload.cleanProfile.profileName,
          profiles: [payload.cleanProfile]
      };
    case PROFILES_LOADED:
      return {
          selectedIndex: 0,
          selectedName: payload.cleanProfile.profileName,
          profiles: [payload.cleanProfile].concat(payload.profiles)
      };
    case PROFILE_UPDATED:
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
