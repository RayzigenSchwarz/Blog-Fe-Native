import {PostTypes, initStateType} from './types';
import {
  FETCH_GET_POSTS_FAILURE,
  FETCH_GET_POSTS_REQUEST,
  FETCH_GET_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENT_FAILURE,
  FETCH_COMMENT_REQUEST,
  FETCH_COMMENT_SUCCESS,
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

const initState: initStateType = {
  posts: [],
  comments: [],
  loading: false,
  error: null,
};

export default (state = initState, action: PostTypes) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_GET_POSTS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case FETCH_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_COMMENT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case FETCH_GET_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GET_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_GET_COMMENT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case FETCH_EDIT_POST_REQUEST:
      return {
        ...state,
      };
    case FETCH_EDIT_POST_SUCCESS:
      return {
        ...state,
      };
    case FETCH_EDIT_POST_FAILURE:
      return {
        ...state,
        error: true,
      };
    case FETCH_GET_EDIT_POST_REQUEST:
      return {
        ...state,
      };
    case FETCH_GET_EDIT_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_GET_EDIT_POST_FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
