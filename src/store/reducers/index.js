import {
  PARAM_UPDATED, PROFILE_ADDED, PROFILE_SELECTED,
  PROFILE_UPDATED, PROFILE_REMOVED, ALL_PROFILES_REMOVED
} from '../actions/action-types';

function reducers(state, { type, payload }) {
  if (state === undefined) {
    return initialStore;
  }

  // FIXME: remove
  console.log(type, payload);
  const { currentProfileIndex, profiles} = state;

  switch(type) {
    case PROFILE_ADDED:
      // TODO: fetch
      const { profileName, ...restParams } = profiles[currentProfileIndex];
      const isTouched = Object.values(restParams).some(Boolean);
      if (!isTouched) return state;

      return {
        currentProfileIndex: 0,
        currentProfileName: EMPTY_PROFILE.profileName,
        profiles: [{ ...EMPTY_PROFILE }].concat(profiles)
      }
    case PROFILE_SELECTED:
      return {
        ...(payload.profileIndex === 0
          ? { profiles: [{ ...EMPTY_PROFILE }].concat(state.profiles.slice(1)) }
          : state
        ),
        currentProfileName: profiles[payload.profileIndex].profileName,
        currentProfileIndex: payload.profileIndex,
      }
    case PARAM_UPDATED:
      const currentIndex = profiles.findIndex((_, index) => index === currentProfileIndex);
      const updatedProfiles = profiles.map((profile, index) =>
        index === currentIndex ? { ...profile, [payload.paramName]: payload.value } : profile
      );
      return {
        ...state,
        profiles: updatedProfiles
      };
    case PROFILE_UPDATED:
      return state;
    case PROFILE_REMOVED:
      return state;
    case ALL_PROFILES_REMOVED:
      return state;
    default:
      return state;
  }
}

const EMPTY_PROFILE = {
  profileName: 'New Profile',
  systemAddress: '',
  userName: '',
  password: '',
  currency: '',
  numberInSystem: '',
  pennyOrderSum: '',
  language: '',
  returnAddress: '',
  orderDescription: '',
  clientId: '',
  bondId: ''
};

const initialStore = {
  currentProfileName: '',
  currentProfileIndex: 0,
  profiles: [
    { ...EMPTY_PROFILE },
    // {
    //   profileName: 'profile_1',
    //   systemAddress: '/payment/', // not saving
    //   userName: 'test',
    //   password: 'test_password',
    //   currency: '643',
    //   numberInSystem: '202081022446736',
    //   pennyOrderSum: '100',
    //   language: 'ru',
    //   returnAddress: '../merchants/test/finish.html',
    //   orderDescription: '',
    //   clientId: '',
    //   bondId: ''
    // }
  ]
};

export default reducers;