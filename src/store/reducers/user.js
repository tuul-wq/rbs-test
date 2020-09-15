import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/user';

function updateUser(state, { type, payload }) {
  switch(type) {
    case USER_LOGGED_IN:
      const { login, email } = payload.user;
      const isValidUser = Boolean(login) && Boolean(email);
      return {
        isLoggedIn: isValidUser,
        login,
        email
      };
    case USER_LOGGED_OUT:
      return { ...payload.initialStore };
    default:
      return state.user;
  }
}

export const userInitialStore = {
  isLoggedIn: false,
  login: '',
  email: ''
};

export default updateUser;
