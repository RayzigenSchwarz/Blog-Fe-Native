import {all, fork} from 'redux-saga/effects';
import postSaga from './post/sagas';
import profileSaga from './profile/sagas';

export function* rootSaga() {
  yield all([
    fork(postSaga),
    // fork(authSaga),
    fork(profileSaga),
    // fork(colleaguesSaga),
  ]);
}
