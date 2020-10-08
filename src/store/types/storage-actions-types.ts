import { IStorage } from 'Services/api.service';
import { IProfile } from './storage-types';

export const PROFILES_LOADED = 'PROFILES_LOADED';
export const PROFILE_ADDED = 'PROFILE_ADDED';
export const PROFILE_UPDATED = 'PROFILE_UPDATED';
export const PROFILE_REMOVED = 'PROFILE_REMOVED';
export const PROFILE_SELECTED = 'PROFILE_SELECTED';
export const PARAM_UPDATED = 'PARAM_UPDATED';

export const GET_PROFILES = 'GET_PROFILES';
export const ADD_PROFILE = 'ADD_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const REMOVE_PROFILE = 'REMOVE_PROFILE';
export const SYNC_STORAGES = 'SYNC_STORAGES';

export type GetProfilesAction = {
  type: typeof GET_PROFILES;
  payload: {
    service: IStorage
  }
}

export type AddProfileAction = {
  type: typeof ADD_PROFILE;
  payload: {
    service: IStorage
  }
}

export type UpdateProfileAction = {
  type: typeof UPDATE_PROFILE;
  payload: {
    service: IStorage
  }
}

export type RemoveProfileAction = {
  type: typeof REMOVE_PROFILE;
  payload: {
    service: IStorage
  }
}

export type SyncStoragesAction = {
  type: typeof SYNC_STORAGES;
  payload: {
    service: IStorage
  }
}

type ProfilesLoadedAction = {
  type: typeof PROFILES_LOADED;
  payload: {
    profiles: IProfile[],
    cleanProfile: IProfile
  };
}

type ProfileAddedAction = {
  type: typeof PROFILE_ADDED;
  payload: {
    cleanProfile: IProfile
  };
}

type ProfileUpdatedAction = {
  type: typeof PROFILE_UPDATED;
  payload: {
    profileIndex: number
  };
}

type ProfileRemovedAction = {
  type: typeof PROFILE_REMOVED;
  payload: {
    profileIndex: number
  };
}

type SelectProfileAction = {
  type: typeof PROFILE_SELECTED;
  payload: {
    profileIndex: number
  };
}

type UpdateProfileParamAction = {
  type: typeof PARAM_UPDATED;
  payload: {
    paramName: string;
    value: string;
  };
}

export type ActionTypes =
  | ProfilesLoadedAction
  | ProfileAddedAction
  | ProfileUpdatedAction
  | ProfileRemovedAction
  | SelectProfileAction
  | UpdateProfileParamAction
  | GetProfilesAction
  | AddProfileAction
  | UpdateProfileAction
  | RemoveProfileAction
  | SyncStoragesAction;
