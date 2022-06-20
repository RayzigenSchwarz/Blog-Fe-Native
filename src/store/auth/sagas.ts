import {all, call, put, takeLatest} from 'redux-saga/effects';
// local
import {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
  fetchRegisterFailure,
  fetchChangePasswordRequest,
  fetchChangePasswordSuccess,
  fetchChangePasswordFailure,
} from './actions';
import request from '../../api/api';
import {
  FETCH_CHANGE_PASSWORD_REQUEST,
  FETCH_LOGIN_REQUEST,
  FETCH_REGISTER_REQUEST,
} from './actionTypes';
import {setStorage} from '../../common/services/storage.service';
import {TOKEN} from '../../common/const/auth.const';

function* fetchLoginSaga({payload}: ReturnType<typeof fetchLoginRequest>): any {
  try {
    const response = yield call(request.post, 'auth/login', payload);
    setStorage(TOKEN, response.data.data.token);
  } catch (e: any) {
    yield put(
      fetchLoginFailure({
        error: e,
      }),
    );
  }
}

function* fetchRegisterSaga({
  payload,
}: ReturnType<typeof fetchRegisterRequest>): any {
  try {
    const response = yield call(request.post, 'auth/register', payload);
    setStorage(TOKEN, response.data.data.token);
    yield put(
      fetchRegisterSuccess({
        payload: response,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchRegisterFailure({
        error: e,
      }),
    );
  }
}

function* fetchChangePasswordSaga({
  payload,
}: ReturnType<typeof fetchChangePasswordRequest>): any {
  try {
    const response = yield call(request.post, 'auth/change-password', payload);
    yield put(
      fetchChangePasswordSuccess({
        payload: response,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchChangePasswordFailure({
        error: e,
      }),
    );
  }
}

function* authSaga(): Generator {
  yield all([
    takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga),
    takeLatest(FETCH_REGISTER_REQUEST, fetchRegisterSaga),
    takeLatest(FETCH_CHANGE_PASSWORD_REQUEST, fetchChangePasswordSaga),
  ]);
}

export default authSaga;
