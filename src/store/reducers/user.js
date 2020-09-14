import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/user';

function updateUser(state, { type, payload }) {
  if (state?.user === undefined) return initialStore;

  switch(type) {
    case USER_LOGGED_IN:
      return {
        isLoggedIn: true,
        login: payload.user.login,
        email: payload.user.email
      };
    case USER_LOGGED_OUT:
      return { ...initialStore };
    default:
      return state.user;
  }
}

const initialStore = {
  isLoggedIn: false,
  login: '',
  email: ''
};

export default updateUser;