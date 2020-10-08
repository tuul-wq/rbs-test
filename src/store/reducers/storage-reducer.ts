import { nanoid } from 'nanoid';

import { IProfile, IStorage } from 'Store/types/storage-types';
import {
  ActionTypes, PARAM_UPDATED, PROFILE_ADDED, PROFILE_SELECTED,
  PROFILE_UPDATED, PROFILE_REMOVED, PROFILES_LOADED
} from '../types/storage-actions-types';

function storageReducer(state = storageState, action: ActionTypes): IStorage {
  const { selectedIndex, profiles } = state;

  switch(action.type) {
    case PROFILE_ADDED:
      const { profileName } = profiles[selectedIndex];
      return {
        selectedIndex: 1,
        selectedName: profileName,
        profiles: [action.payload.cleanProfile].concat(profiles)
      }
    case PROFILE_SELECTED:
      return {
        ...state,
        selectedIndex: action.payload.profileIndex,
        selectedName: profiles[action.payload.profileIndex].profileName
      }
    case PROFILE_REMOVED:
      const { profileIndex } = action.payload;
      const newProfiles = profiles.filter((_, index) => index !== profileIndex);
      const newIndex = newProfiles.length - 1 >= profileIndex ? profileIndex : profileIndex - 1;
      return {
        profiles: newProfiles,
        selectedIndex: newIndex,
        selectedName: newProfiles[newIndex].profileName
      };
    case PARAM_UPDATED:
      const currentIndex = profiles.findIndex((_, index) => index === selectedIndex);
      const updatedProfiles = [...profiles];
      updatedProfiles[currentIndex] = {
        ...updatedProfiles[currentIndex],
        [action.payload.paramName]: action.payload.value
      };
      return {
        ...state,
        profiles: updatedProfiles
      };
    case PROFILES_LOADED:
      const newLoadedIndex = action.payload.profiles.findIndex(profile =>
        profile.profileId === profiles[selectedIndex].profileId
      );
      const newSelectedName = newLoadedIndex === -1
        ? action.payload.cleanProfile.profileName
        : action.payload.profiles[newLoadedIndex].profileName;
      return {
        selectedIndex: newLoadedIndex + 1,
        selectedName: newSelectedName,
        profiles: [action.payload.cleanProfile].concat(action.payload.profiles)
      };
    case PROFILE_UPDATED:
      return {
        ...state,
        selectedName: profiles[action.payload.profileIndex].profileName
      }
    default:
      return state;
  }
}

export const EMPTY_PROFILE = (): IProfile => {
  const date = new Date();
  const sysNumber = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds']
    .map(method => (date as { [key: string]: any })[`get${method}`]())
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

export const storageState: IStorage = {
  selectedName: '',
  selectedIndex: 0,
  profiles: [EMPTY_PROFILE()]
};

export default storageReducer;
