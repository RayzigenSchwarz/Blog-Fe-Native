import {PostsTypes} from '../../common/types/post.types';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_GET_POSTS_REQUEST,
  FETCH_GET_POSTS_SUCCESS,
  FETCH_GET_POSTS_FAILURE,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_REQUEST,
  FETCH_EDIT_POST_REQUEST,
  FETCH_EDIT_POST_SUCCESS,
  FETCH_EDIT_POST_FAILURE,
  FETCH_GET_EDIT_POST_REQUEST,
  FETCH_GET_EDIT_POST_SUCCESS,
  FETCH_GET_EDIT_POST_FAILURE,
} from './actionTypes';

import {
  FetchCommentRequest,
  FetchCommentSuccess,
  FetchEditPostFailure,
  FetchEditPostRequest,
  FetchEditPostSuccess,
  FetchGetEditPostFailure,
  FetchGetEditPostRequest,
  FetchGetEditPostSuccess,
  FetchGetPostsSuccess,
  FetchPostsFailure,
  FetchPostsRequest,
  FetchPostsRequestPayload,
  FetchPostsSuccess,
} from './types';

export const fetchPostsRequest = (
  payload: FetchPostsRequestPayload,
): FetchPostsRequest => ({
  type: FETCH_POSTS_REQUEST,
  payload,
});

export const fetchPostsSuccess = (): FetchPostsSuccess => ({
  type: FETCH_POSTS_SUCCESS,
});

export const fetchPostsFailure = (error: {error: FetchPostsFailure}) => ({
  type: FETCH_POSTS_FAILURE,
  error,
});

export const fetchGetPostsRequest = (id?: string): any => ({
  type: FETCH_GET_POSTS_REQUEST,
  id,
});

export const fetchGetPostsSuccess = (
  payload: PostsTypes,
): FetchGetPostsSuccess => ({
  type: FETCH_GET_POSTS_SUCCESS,
  payload,
});

export const fetchGetPostsFailure = (error: any): any => ({
  type: FETCH_GET_POSTS_FAILURE,
  error,
});

export const fetchCommentsRequest = (payload: string): FetchCommentRequest => ({
  type: FETCH_COMMENT_REQUEST,
  payload,
});

export const fetchCommentsSuccess = (): FetchCommentSuccess => ({
  type: FETCH_COMMENT_SUCCESS,
});

export const fetchCommentFailure = (error: {error: any}) => ({
  type: FETCH_POSTS_FAILURE,
  error,
});

export const fetchEditPostRequest = (
  payload: FetchPostsRequestPayload,
  id: string | undefined,
): FetchEditPostRequest => ({
  type: FETCH_EDIT_POST_REQUEST,
  payload,
  id,
});
export const fetchEditPostSuccess = (): FetchEditPostSuccess => ({
  type: FETCH_EDIT_POST_SUCCESS,
});
export const fetchEditPostFailure = (error: {error: FetchEditPostFailure}) => ({
  type: FETCH_EDIT_POST_FAILURE,
  error,
});

export const fetchGetEditPostRequest = (
  id?: string | undefined,
): FetchGetEditPostRequest => ({
  type: FETCH_GET_EDIT_POST_REQUEST,
  id,
});
export const fetchGetEditPostSuccess = (
  payload: PostsTypes,
): FetchGetEditPostSuccess => ({
  type: FETCH_GET_EDIT_POST_SUCCESS,
  payload,
});
export const fetchGetEditPostFailure = (
  error: any,
): FetchGetEditPostFailure => ({
  type: FETCH_GET_EDIT_POST_FAILURE,
  error,
});
