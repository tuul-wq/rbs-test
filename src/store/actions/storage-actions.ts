import { EMPTY_PROFILE } from '../reducers/storage-reducer';
import { IProfile } from 'Store/types/storage-types';
import {
  ActionTypes, ADD_PROFILE, GET_PROFILES, PARAM_UPDATED, PROFILES_LOADED, PROFILE_ADDED,
  PROFILE_REMOVED, PROFILE_SELECTED, PROFILE_UPDATED, REMOVE_PROFILE, SYNC_STORAGES, UPDATE_PROFILE
} from 'Store/types/storage-actions-types';
import { IStorage } from 'Services/api.service';

export const profilesLoaded = (profiles: IProfile[]): ActionTypes => ({
  type: PROFILES_LOADED,
  payload: {
    profiles,
    cleanProfile: EMPTY_PROFILE()
  }
});

export const profileAdded = (): ActionTypes => ({
  type: PROFILE_ADDED,
  payload : {
    cleanProfile: EMPTY_PROFILE()
  }
});

export const profileUpdated = (profileIndex: number): ActionTypes => ({
  type: PROFILE_UPDATED,
  payload: {
    profileIndex
  }
});

export const profileRemoved = (profileIndex: number): ActionTypes => ({
  type: PROFILE_REMOVED,
  payload: {
    profileIndex
  }
});

export const selectProfile = (profileIndex: number): ActionTypes => ({
  type: PROFILE_SELECTED,
  payload: {
    profileIndex
  }
});

export const updateProfileParam = (paramName: string, value: string): ActionTypes => ({
  type: PARAM_UPDATED,
  payload: {
    paramName,
    value
  }
});

export const getProfiles = (service: IStorage) => (): ActionTypes => ({
  type: GET_PROFILES,
  payload: {
    service
  }
});

export const addProfile = (service: IStorage) => (): ActionTypes => ({
  type: ADD_PROFILE,
  payload: {
    service
  }
});

export const updateProfile = (service: IStorage) => (): ActionTypes => ({
  type: UPDATE_PROFILE,
  payload: {
    service
  }
});

export const removeProfile = (service: IStorage) => (): ActionTypes => ({
  type: REMOVE_PROFILE,
  payload: {
    service
  }
});

export const syncStorages = (service: IStorage) => (): ActionTypes => ({
  type: SYNC_STORAGES,
  payload: {
    service
  }
});

