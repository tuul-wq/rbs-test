import { call, put, select, takeEvery } from 'redux-saga/effects';
import { AppState } from 'Store/store';
import { IStorage } from 'Store/types/storage-types';
import {
  profileAdded, profileRemoved, profilesLoaded, profileUpdated
} from 'Store/actions/storage-actions';
import {
  GET_PROFILES, ADD_PROFILE, UPDATE_PROFILE, REMOVE_PROFILE, SYNC_STORAGES,
  GetProfilesAction, AddProfileAction, UpdateProfileAction,
  RemoveProfileAction, SyncStoragesAction
} from 'Store/types/storage-actions-types';

function* watchAllSagas() {
  yield takeEvery(GET_PROFILES, getProfiles);
  yield takeEvery(ADD_PROFILE, addProfile);
  yield takeEvery(UPDATE_PROFILE, updateProfile);
  yield takeEvery(REMOVE_PROFILE, removeProfile);
  yield takeEvery(SYNC_STORAGES, syncStorages);
}

function* getProfiles(action: GetProfilesAction) {
  const profiles = yield call(action.payload.service.getAllProfiles);
  yield put(profilesLoaded(profiles));
}

function* addProfile(action: AddProfileAction) {
  const { profiles }: IStorage = yield select(getStorage);
  yield call(action.payload.service.updateProfile, profiles);
  yield put(profileAdded());
}

function* updateProfile(action: UpdateProfileAction) {
  const { profiles, selectedIndex } = yield select(getStorage);
  const profilesToUpdate = profiles.slice(1);
  yield call(action.payload.service.updateProfile, profilesToUpdate);
  yield put(profileUpdated(selectedIndex));
}

function* removeProfile(action: RemoveProfileAction) {
  const { profiles, selectedIndex } = yield select(getStorage);
  const newProfiles = profiles.filter((_: any, index: number) => ![0, selectedIndex].includes(index));
  yield call(action.payload.service.updateProfile, newProfiles);
  yield put(profileRemoved(selectedIndex));
}

function* syncStorages(action: SyncStoragesAction) {
  const { profiles } = yield select(getStorage);
  const realProfiles = profiles.slice(1);
  action.payload.service.syncStorages(realProfiles);
}

const getStorage = (state: AppState): IStorage => state.storage;

export default watchAllSagas();
