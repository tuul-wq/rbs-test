import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/user';

function updateUser(state, { type, payload }) {
  switch(type) {
    case USER_LOGGED_IN:
      return {
        isLoggedIn: true,
        login: payload.user.login,
        email: payload.user.email
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
