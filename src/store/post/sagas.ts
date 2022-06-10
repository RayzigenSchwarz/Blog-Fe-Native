import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
  FETCH_COMMENT_REQUEST,
  FETCH_EDIT_POST_REQUEST,
  FETCH_GET_EDIT_POST_REQUEST,
  FETCH_GET_POSTS_REQUEST,
  FETCH_POSTS_REQUEST,
} from './actionTypes';
import request from '../../api/api';
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  fetchGetPostsSuccess,
  fetchGetPostsFailure,
  fetchCommentsSuccess,
  fetchCommentFailure,
  fetchCommentsRequest,
  fetchPostsRequest,
  fetchEditPostRequest,
  fetchEditPostFailure,
  fetchGetEditPostSuccess,
  fetchGetEditPostFailure,
  fetchGetPostsRequest,
} from './action';

function* fetchPostsSaga({payload}: ReturnType<typeof fetchPostsRequest>): any {
  try {
    yield call(request.post, 'posts', payload);
    console.log(payload, 'payload');
    yield put(fetchPostsSuccess());
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e,
      }),
    );
  }
}

function* fetchGetPostsSaga({id = ''}: any): any {
  try {
    const response = yield call(request.get, `posts/${id}`);
    yield put(fetchGetPostsSuccess(response.data));
  } catch (e: any) {
    yield put(
      fetchGetPostsFailure({
        error: e,
      }),
    );
  }
}

function* fetchCommentsSaga({
  payload,
}: ReturnType<typeof fetchCommentsRequest>): any {
  try {
    yield call(request.post, 'comments', payload);
    yield put(fetchCommentsSuccess());
  } catch (e: any) {
    yield put(
      fetchCommentFailure({
        error: e,
      }),
    );
  }
}

function* fetchEditPostSaga({
  payload,
  id,
}: ReturnType<typeof fetchEditPostRequest>): any {
  try {
    yield call(request.patch, `posts/${id}`, payload);
    yield put(fetchGetPostsRequest());
  } catch (e: any) {
    yield put(
      fetchEditPostFailure({
        error: e,
      }),
    );
  }
}

function* postSaga() {
  yield all([
    takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga),
    takeLatest(FETCH_GET_POSTS_REQUEST, fetchGetPostsSaga),
    takeLatest(FETCH_COMMENT_REQUEST, fetchCommentsSaga),
    takeLatest(FETCH_EDIT_POST_REQUEST, fetchEditPostSaga),
  ]);
}

export default postSaga;
