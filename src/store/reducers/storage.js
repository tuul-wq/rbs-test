import {
    PARAM_UPDATED, PROFILE_ADDED, PROFILE_SELECTED, PROFILES_LOADED,
    PROFILE_UPDATED, PROFILE_REMOVED, PROFILE_REMOVED_ALL
  } from '../actions/storage';

function updateStorage(state, { type, payload }) {
  if (state?.storage === undefined) return initialStore;

  const { storage } = state;
  const { selectedIndex, profiles } = storage;

  switch(type) {
    case PROFILE_ADDED:
      const { profileName, ...restParams } = profiles[selectedIndex];
      const isTouched = Object.values(restParams).some(Boolean);
      if (!isTouched) return storage;

      return {
          selectedIndex: 0,
          selectedName: EMPTY_PROFILE.profileName,
          profiles: [{ ...EMPTY_PROFILE }].concat(profiles)
      }
    case PROFILE_SELECTED:
      return {
          ...(payload.profileIndex === 0
            ? { profiles: [{ ...EMPTY_PROFILE }].concat(profiles.slice(1)) }
            : storage
          ),
          selectedName: profiles[payload.profileIndex].profileName,
          selectedIndex: payload.profileIndex,
      }
    case PROFILE_REMOVED:
      return {
          ...storage,
          profiles: profiles.filter((_, index) => index !== payload.profileIndex),
          selectedIndex: 0,
          selectedName: profiles[0].profileName
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
          selectedName: EMPTY_PROFILE.profileName,
          profiles: [{ ...EMPTY_PROFILE }]
      };
    case PROFILES_LOADED:
      return {
          selectedIndex: 0,
          selectedName: EMPTY_PROFILE.profileName,
          profiles: [{ ...EMPTY_PROFILE }].concat(payload.profiles)
      };
    case PROFILE_UPDATED:
    default:
      return storage;
  }
}

const EMPTY_PROFILE = {
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
};

const initialStore = {
  selectedName: '',
  selectedIndex: 0,
  profiles: [
  { ...EMPTY_PROFILE },
  // {
  //   profileName: 'profile_1',
  //   systemAddress: '/payment/', // not saving
  //   userName: 'test',
  //   password: 'test_password',
  //   currency: '643',
  //   numberInSystem: '202081022446736',
  //   orderSum: '100',
  //   language: 'ru',
  //   returnAddress: '../merchants/test/finish.html',
  //   orderDescription: '',
  //   clientId: '',
  //   bondId: ''
  // }
  ]
};

export default updateStorage;