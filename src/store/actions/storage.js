export const PROFILES_LOADED = 'PROFILES_LOADED';
function profilesLoaded(profiles) {
  return {
    type: PROFILES_LOADED,
    payload: { profiles }
  }
}

export const PROFILE_ADDED = 'PROFILE_ADDED';
function profileAdded() {
  return {
    type: PROFILE_ADDED
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

export const PROFILE_REMOVED_ALL = 'PROFILE_REMOVED_ALL';
export function profileRemovedAll() {
  return {
    type: PROFILE_REMOVED_ALL
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
    await service.updateProfile(profiles);
    dispatch(profileUpdated(selectedIndex));
}

export const removeProfile = (service) => () =>
  async (dispatch, getState) => {
    const { storage: { profiles, selectedIndex } } = getState();
    const newProfiles = profiles.filter((_, index) => index !== selectedIndex);
    await service.updateProfile(newProfiles);
    dispatch(profileRemoved(selectedIndex));
}

export const removeAllProfile = (service) => () =>
  async (dispatch) => {
    await service.updateProfile([]);
    dispatch(profileRemovedAll());
}