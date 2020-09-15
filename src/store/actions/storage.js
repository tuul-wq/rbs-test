import { EMPTY_PROFILE } from '../reducers/storage';

export const PROFILES_LOADED = 'PROFILES_LOADED';
function profilesLoaded(profiles) {
  return {
    type: PROFILES_LOADED,
    payload: {
      profiles,
      cleanProfile: EMPTY_PROFILE()
    }
  }
}

export const PROFILE_ADDED = 'PROFILE_ADDED';
function profileAdded() {
  return {
    type: PROFILE_ADDED,
    payload : {
      cleanProfile: EMPTY_PROFILE()
    }
  }
}

export const PROFILE_UPDATED = 'PROFILE_UPDATED';
function profileUpdated(profileIndex) {
  return {
    type: PROFILE_UPDATED,
    payload: { profileIndex }
  }
}

export const PROFILE_REMOVED = 'PROFILE_REMOVED';
function profileRemoved(profileIndex) {
  return {
    type: PROFILE_REMOVED,
    payload: { profileIndex }
  }
}

export const PROFILE_SELECTED = 'PROFILE_SELECTED';
export function selectProfile(profileIndex) {
  return {
    type: PROFILE_SELECTED,
    payload: { profileIndex }
  }
}

export const PARAM_UPDATED = 'PARAM_UPDATED';
export function updateProfileParam(paramName, value) {
  return {
    type: PARAM_UPDATED,
    payload: { paramName, value }
  }
}

export const getProfiles = (service) => () =>
  async (dispatch) => {
    const profiles = await service.getAllProfiles();
    dispatch(profilesLoaded(profiles));
}

export const addProfile = (service) => () =>
  async (dispatch, getState) => {
    const { storage: { profiles } } = getState();
    await service.updateProfile(profiles);
    dispatch(profileAdded());
}

export const updateProfile = (service) => () =>
  async (dispatch, getState) => {
    const { storage: { profiles, selectedIndex } } = getState();
    const profilesToUpdate = profiles.slice(1);
    await service.updateProfile(profilesToUpdate);
    dispatch(profileUpdated(selectedIndex));
}

export const removeProfile = (service) => () =>
  async (dispatch, getState) => {
    const { storage: { profiles, selectedIndex } } = getState();
    const newProfiles = profiles.filter((_, index) => ![0, selectedIndex].includes(index));
    await service.updateProfile(newProfiles);
    dispatch(profileRemoved(selectedIndex));
}

export const syncStorages = (service) => () =>
  (_, getState) => {
    const { storage: { profiles } } = getState();
    const realProfiles = profiles.slice(1);
    service.syncStorages(realProfiles);
}
