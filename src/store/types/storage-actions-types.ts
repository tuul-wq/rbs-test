import { IProfile } from './storage-types';

export const PROFILES_LOADED = 'PROFILES_LOADED';
export const PROFILE_ADDED = 'PROFILE_ADDED';
export const PROFILE_UPDATED = 'PROFILE_UPDATED';
export const PROFILE_REMOVED = 'PROFILE_REMOVED';
export const PROFILE_SELECTED = 'PROFILE_SELECTED';
export const PARAM_UPDATED = 'PARAM_UPDATED';

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
  | UpdateProfileParamAction;
