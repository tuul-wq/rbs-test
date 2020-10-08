import { userState } from '../reducers/user-reducer';
import {
  ActionTypes, USER_ERROR_RESET, USER_LOGGED_IN, USER_LOGGED_OUT
} from 'Store/types/user-actions-types';
import { IAuth } from 'Services/api.service';
import { Dispatch } from 'redux';

const userLoggedIn = (user: any): ActionTypes => ({
  type: USER_LOGGED_IN,
  payload: {
    user
  }
});

const userLoggedOut = (): ActionTypes => ({
  type: USER_LOGGED_OUT,
  payload: {
    initialState: userState
  }
});

export const resetLoginError = (): ActionTypes => ({
  type: USER_ERROR_RESET
});

export const loginUser = (service: IAuth) => (login: string, password: string) =>
  async (dispatch: Dispatch<ActionTypes>) => {
  const user = await service.login(login, password);
  dispatch(userLoggedIn(user));
}

export const logoutUser = (service: IAuth) => () =>
  async (dispatch: Dispatch<ActionTypes>) => {
  await service.logout();
  dispatch(userLoggedOut());
}
