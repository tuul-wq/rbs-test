import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import { storageInitialStore } from './reducers/storage';
import { userInitialStore } from './reducers/user';

const initState = {
  user: userInitialStore,
  storage: storageInitialStore
};

export default createStore(reducers, initState, applyMiddleware(thunkMiddleware));
