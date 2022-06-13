import {
  FETCH_GET_POSTS_FAILURE,
  FETCH_GET_POSTS_REQUEST,
  FETCH_GET_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_FAILURE,
  FETCH_GET_COMMENT_REQUEST,
  FETCH_GET_COMMENT_SUCCESS,
  FETCH_GET_COMMENT_FAILURE,
  FETCH_EDIT_POST_REQUEST,
  FETCH_EDIT_POST_SUCCESS,
  FETCH_EDIT_POST_FAILURE,
  FETCH_GET_EDIT_POST_REQUEST,
  FETCH_GET_EDIT_POST_SUCCESS,
  FETCH_GET_EDIT_POST_FAILURE,
} from './actionTypes';
import {PostsTypes} from '../../common/types/post.types';

export type FetchPostsRequestPayload = {
  title: string;
  image: string;
  description: string;
};

export type FetchPostsRequest = {
  type: typeof FETCH_POSTS_REQUEST;
  payload: FetchPostsRequestPayload;
};
export type FetchPostsSuccess = {
  type: typeof FETCH_POSTS_SUCCESS;
};
export type FetchPostsFailure = {
  type: typeof FETCH_POSTS_FAILURE;
  payload: FetchPostsRequestPayload;
};

export type FetchGetPostsRequest = {
  type: typeof FETCH_GET_POSTS_REQUEST;
};
export type FetchGetPostsSuccess = {
  type: typeof FETCH_GET_POSTS_SUCCESS;
  payload: PostsTypes;
};
export type FetchGetPostsFailure = {
  type: typeof FETCH_GET_POSTS_FAILURE;
};

export type FetchCommentRequest = {
  type: typeof FETCH_COMMENT_REQUEST;
  payload: string;
};
export type FetchCommentSuccess = {
  type: typeof FETCH_COMMENT_SUCCESS;
};
export type FetchCommentFailure = {
  type: typeof FETCH_COMMENT_FAILURE;
};

export type FetchGetCommentRequest = {
  type: typeof FETCH_GET_COMMENT_REQUEST;
};
export type FetchGetCommentSuccess = {
  type: typeof FETCH_GET_COMMENT_SUCCESS;
};
export type FetchGetCommentFailure = {
  type: typeof FETCH_GET_COMMENT_FAILURE;
};

export type FetchEditPostRequest = {
  type: typeof FETCH_EDIT_POST_REQUEST;
  payload: FetchPostsRequestPayload;
  id: string | undefined;
};
export type FetchEditPostSuccess = {
  type: typeof FETCH_EDIT_POST_SUCCESS;
};
export type FetchEditPostFailure = {
  type: typeof FETCH_EDIT_POST_FAILURE;
  payload: FetchPostsRequestPayload;
};

export type FetchGetEditPostRequest = {
  type: typeof FETCH_GET_EDIT_POST_REQUEST;
  id: string | undefined;
};
export type FetchGetEditPostSuccess = {
  type: typeof FETCH_GET_EDIT_POST_SUCCESS;
  payload: PostsTypes;
};
export type FetchGetEditPostFailure = {
  type: typeof FETCH_GET_EDIT_POST_FAILURE;
  error: any;
};
export type PostTypes =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
  | FetchGetPostsRequest
  | FetchGetPostsSuccess
  | FetchGetPostsFailure
  | FetchCommentRequest
  | FetchCommentSuccess
  | FetchCommentFailure
  | FetchGetCommentRequest
  | FetchGetCommentSuccess
  | FetchGetCommentFailure
  | FetchEditPostRequest
  | FetchEditPostSuccess
  | FetchEditPostFailure
  | FetchGetEditPostRequest
  | FetchGetEditPostSuccess
  | FetchGetEditPostFailure;

export interface PostsDataType {
  title: string;
  description: string;
  image: string;
}

export interface initStateType {
  loading: boolean;
  posts: postType[] | postType;
  comments: commentType[] | commentType;
  error: any;
}

export type postType = {
  _id: string;
  image: string;
  title: string;
  description: string;
  like: string;
  createdAt: string;
  postAuthor: string;
  userAvatar: string;
};

export type commentType = {
  _id: string;
  image: string;
  name: string;
  date: string;
  description: string;
};
