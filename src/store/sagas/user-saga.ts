import { call, put, takeEvery } from 'redux-saga/effects';

import {
  loginUserFail, userLoggedIn, userLoggedOut
} from 'Store/actions/user-actions';
import {
  UserLogInAction, UserLogOutAction, USER_LOGIN, USER_LOGOUT
} from 'Store/types/user-actions-types';

function* watchAllSagas() {
  yield takeEvery(USER_LOGIN, userLogin);
  yield takeEvery(USER_LOGOUT, userLogout);
}

function* userLogin(action: UserLogInAction) {
  const { payload: { service, login, password } } = action;
  const user = yield call(service.login, login, password);
  if (user.hasError) {
    yield put(loginUserFail());
  } else {
    yield put(userLoggedIn(user));
  }
}

function* userLogout(action: UserLogOutAction) {
  yield call(action.payload.service.logout);
  yield put(userLoggedOut());
}

export default watchAllSagas();
