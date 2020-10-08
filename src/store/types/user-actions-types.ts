import { IAuth } from 'Services/api.service';
import { IUser } from './user-types';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
export const USER_ERROR_RESET = 'USER_ERROR_RESET';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export type UserLogInAction = {
  type: typeof USER_LOGIN;
  payload: {
    service: IAuth;
    login: string;
    password: string;
  }
}

export type UserLogOutAction = {
  type: typeof USER_LOGOUT;
  payload: {
    service: IAuth;
  }
}

type UserLoggedInAction = {
  type: typeof USER_LOGGED_IN;
  payload: {
    user: IUser
  };
}

type UserLogInFailAction = {
  type: typeof USER_LOGIN_FAIL;
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
  | ResetLoginError
  | UserLogInAction
  | UserLogInFailAction
  | UserLogOutAction;
