import { userInitialStore } from '../reducers/user';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: { user }
  }
}

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
function userLoggedOut() {
  return {
    type: USER_LOGGED_OUT,
    payload: {
      initialStore: userInitialStore
    }
  }
}

export const USER_ERROR_RESET = 'USER_ERROR_RESET';
export function resetLoginError() {
  return {
    type: USER_ERROR_RESET
  }
}

export const loginUser = (service) => (login, password) =>
  async (dispatch) => {
  const user = await service.login(login, password);
  dispatch(userLoggedIn(user));
}

export const logoutUser = (service) => () =>
  async (dispatch) => {
  await service.logout();
  dispatch(userLoggedOut());
}
