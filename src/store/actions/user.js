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

export function loginUser(service) {
  return async function(dispatch) {
    // await service.login(login, password)
    const user = await service.login();
    dispatch(userLoggedIn(user));
  }
}

export function logoutUser(service) {
  return async function(dispatch) {
    await service.logout();
    dispatch(userLoggedOut());
  }
}