import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import storageReducer, { storageState } from './reducers/storage-reducer';
import userReducer, { userState } from './reducers/user-reducer';

const initState = {
  user: userState,
  storage: storageState
};

const reducer = combineReducers({
  user: userReducer,
  storage: storageReducer
});

export type AppState = ReturnType<typeof reducer>;

export default createStore(reducer, initState, applyMiddleware(thunkMiddleware));
