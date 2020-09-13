import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/user';

function updateUser(state, { type, payload }) {
  if (state === undefined) return initialStore;

  switch(type) {
    case USER_LOGGED_IN:
      return state.user;
    case USER_LOGGED_OUT:
      return state.user;
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