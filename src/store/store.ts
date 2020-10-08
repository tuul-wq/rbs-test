import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './sagas';
import storageReducer, { storageState } from './reducers/storage-reducer';
import userReducer, { userState } from './reducers/user-reducer';

const reducer = combineReducers({
  user: userReducer,
  storage: storageReducer
});
export type AppState = ReturnType<typeof reducer>;

const initState: AppState = {
  user: userState,
  storage: storageState
};

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, initState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
