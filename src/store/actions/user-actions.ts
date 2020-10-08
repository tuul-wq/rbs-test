import { userState } from '../reducers/user-reducer';
import { IUser } from 'Store/types/user-types';
import {
  ActionTypes, USER_ERROR_RESET, USER_LOGGED_IN, USER_LOGGED_OUT,
  USER_LOGIN, USER_LOGIN_FAIL, USER_LOGOUT
} from 'Store/types/user-actions-types';
import { IAuth } from 'Services/api.service';

export const userLoggedIn = (user: IUser): ActionTypes => ({
  type: USER_LOGGED_IN,
  payload: {
    user
  }
});

export const userLoggedOut = (): ActionTypes => ({
  type: USER_LOGGED_OUT,
  payload: {
    initialState: userState
  }
});

export const resetLoginError = (): ActionTypes => ({
  type: USER_ERROR_RESET
});

export const loginUser = (service: IAuth) => (login: string, password: string): ActionTypes => ({
  type: USER_LOGIN,
  payload: {
    service,
    login,
    password
  }
});

export const loginUserFail = (): ActionTypes => ({
  type: USER_LOGIN_FAIL,
});

export const logoutUser = (service: IAuth) => (): ActionTypes => ({
  type: USER_LOGOUT,
  payload: {
    service
  }
});
