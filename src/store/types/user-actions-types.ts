import { IUser } from './user-types';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const USER_ERROR_RESET = 'USER_ERROR_RESET';

type UserLoggedInAction = {
  type: typeof USER_LOGGED_IN;
  payload: {
    user: IUser
  };
}

type UserLoggedOutAction = {
  type: typeof USER_LOGGED_OUT;
  payload: {
    initialState: IUser
  };
}

type ResetLoginError = {
  type: typeof USER_ERROR_RESET;
}

export type ActionTypes =
  | UserLoggedInAction
  | UserLoggedOutAction
  | ResetLoginError;
