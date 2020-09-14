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
    type: USER_LOGGED_OUT
  }
}

export const loginUser = (service) => () =>
  async (dispatch) => {
  const user = await service.login();
  dispatch(userLoggedIn(user));
}

export const logoutUser = (service) => () =>
  async (dispatch) => {
  await service.logout();
  dispatch(userLoggedOut());
}
