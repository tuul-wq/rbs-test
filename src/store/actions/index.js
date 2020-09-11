import {
  PARAM_UPDATED, PROFILE_ADDED, PROFILE_SELECTED,
  PROFILE_UPDATED, PROFILE_REMOVED, ALL_PROFILES_REMOVED
} from './action-types';

export function addNewProfile() {
  return {
    type: PROFILE_ADDED
  }
}

export function updateProfile(profileIndex) {
  return {
    type: PROFILE_UPDATED,
    payload: { profileIndex }
  }
}

export function removeProfile(profileIndex) {
  return {
    type: PROFILE_REMOVED,
    payload: { profileIndex }
  }
}

export function removeAllProfiles() {
  return {
    type: ALL_PROFILES_REMOVED
  }
}

export function selectProfile(profileIndex) {
  return {
    type: PROFILE_SELECTED,
    payload: { profileIndex }
  }
}

export function updateProfileParam(paramName, value) {
  return {
    type: PARAM_UPDATED,
    payload: { paramName, value }
  }
}
