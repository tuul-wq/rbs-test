import { EMPTY_PROFILE } from '../reducers/storage-reducer';
import {
  ActionTypes, PARAM_UPDATED, PROFILES_LOADED, PROFILE_ADDED,
  PROFILE_REMOVED, PROFILE_SELECTED, PROFILE_UPDATED
} from 'Store/types/storage-actions-types';
import { IProfile } from 'Store/types/storage-types';
import { IStorage } from 'Services/api.service';
import { AppState } from 'Store/store';
import { Dispatch } from 'redux';

const profilesLoaded = (profiles: IProfile[]): ActionTypes => ({
  type: PROFILES_LOADED,
  payload: {
    profiles,
    cleanProfile: EMPTY_PROFILE()
  }
});

const profileAdded = (): ActionTypes => ({
  type: PROFILE_ADDED,
  payload : {
    cleanProfile: EMPTY_PROFILE()
  }
});

const profileUpdated = (profileIndex: number): ActionTypes => ({
  type: PROFILE_UPDATED,
  payload: {
    profileIndex
  }
});

const profileRemoved = (profileIndex: number): ActionTypes => ({
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

export const getProfiles = (service: IStorage) => () =>
  async (dispatch: Dispatch<ActionTypes>) => {
    const profiles = await service.getAllProfiles();
    dispatch(profilesLoaded(profiles));
}

export const addProfile = (service: IStorage) => () =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppState) => {
    const { storage: { profiles } } = getState();
    await service.updateProfile(profiles);
    dispatch(profileAdded());
}

export const updateProfile = (service: IStorage) => () =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppState) => {
    const { storage: { profiles, selectedIndex } } = getState();
    const profilesToUpdate = profiles.slice(1);
    await service.updateProfile(profilesToUpdate);
    dispatch(profileUpdated(selectedIndex));
}

export const removeProfile = (service: IStorage) => () =>
  async (dispatch: Dispatch<ActionTypes>, getState: () => AppState) => {
    const { storage: { profiles, selectedIndex } } = getState();
    const newProfiles = profiles.filter((_: any, index: number) => ![0, selectedIndex].includes(index));
    await service.updateProfile(newProfiles);
    dispatch(profileRemoved(selectedIndex));
}

export const syncStorages = (service: IStorage) => () =>
  (_: any, getState: () => AppState) => {
    const { storage: { profiles } } = getState();
    const realProfiles = profiles.slice(1);
    service.syncStorages(realProfiles);
}
