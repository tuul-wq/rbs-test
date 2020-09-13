import updateStorage from './storage';
import updateUser from './user';

function reducers(state, action) {
  return {
    user: updateUser(state, action),
    storage: updateStorage(state, action)
  }
};

export default reducers;