import {
  USER_LOGGED_IN, USER_LOGGED_OUT, USER_ERROR_RESET
} from '../actions/user';

function updateUser(state, { type, payload }) {
  switch(type) {
    case USER_LOGGED_IN:
      const { login, email } = payload.user;
      const isValidUser = Boolean(login) || Boolean(email);
      return {
        isLoggedIn: isValidUser,
        ...payload.user
      };
    case USER_LOGGED_OUT:
      return { ...payload.initialStore };
    case USER_ERROR_RESET:
      return {
        ...state.user,
        hasError: false
      };
    default:
      return state.user;
  }
}

export const userInitialStore = {
  isLoggedIn: false,
  login: '',
  email: '',
  hasError: false
};

export default updateUser;
