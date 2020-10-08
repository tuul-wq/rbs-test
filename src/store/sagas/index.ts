import { all } from "redux-saga/effects";

import userSagas from './user-saga';
import storageSagas from './storage-saga';

function* rootSaga() {
  yield all([userSagas, storageSagas]);
}

export default rootSaga;
