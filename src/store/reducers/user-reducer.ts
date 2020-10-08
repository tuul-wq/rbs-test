import { IUser } from 'Store/types/user-types';
import {
  ActionTypes, USER_LOGGED_IN, USER_LOGGED_OUT, USER_ERROR_RESET, USER_LOGIN_FAIL
} from '../types/user-actions-types';

function userReducer(state = userState, action: ActionTypes): IUser {
  switch(action.type) {
    case USER_LOGGED_IN:
      const { login, email } = action.payload.user;
      const isValidUser = Boolean(login) || Boolean(email);
      return {
        ...action.payload.user,
        isLoggedIn: isValidUser
      };
    case USER_LOGGED_OUT:
      return {
        ...action.payload.initialState
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        hasError: true
      };
    case USER_ERROR_RESET:
      return {
        ...state,
        hasError: false
      };
    default:
      return state;
  }
}

export const userState: IUser = {
  isLoggedIn: false,
  login: '',
  email: '',
  hasError: false
};

export default userReducer;
