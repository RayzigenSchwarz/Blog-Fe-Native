import {all, call, put, takeLatest} from 'redux-saga/effects';
// local
import {
  fetchGetUserinfoFailure,
  fetchGetUserinfoSuccess,
  fetchPostProfileFailure,
  fetchPostProfileSuccess,
} from './actions';
import request from '../../api/api';
import {
  FETCH_GET_USERINFO_REQUEST,
  FETCH_POST_PROFILE_REQUEST,
} from './actionTypes';

function* fetchPostProfileSaga({
  payload,
}: ReturnType<typeof fetchPostProfileSuccess>): any {
  try {
    const response = yield call(request.post, '/profile', payload);
    yield put(
      fetchPostProfileSuccess({
        payload: response.data,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchPostProfileFailure({
        error: e,
      }),
    );
  }
}

function* fetchGetUserinfoSaga(): any {
  try {
    const response = yield call(request.get, 'userInfo');
    yield put(fetchGetUserinfoSuccess(response.data));
  } catch (e: any) {
    yield put(
      fetchGetUserinfoFailure({
        error: e,
      }),
    );
  }
}

function* profileSaga(): Generator {
  yield all([takeLatest(FETCH_POST_PROFILE_REQUEST, fetchPostProfileSaga)]);
  yield all([takeLatest(FETCH_GET_USERINFO_REQUEST, fetchGetUserinfoSaga)]);
}

export default profileSaga;
