import {createSelector} from 'reselect';
import {AppState} from '../rootReducer';
import {initStateType} from './types';
import {IInitStateType} from '../profile/types';

export const getPost = (state: AppState) => state.post;

export const getComment = (state: AppState) => state.post;

// export const getUsersInfo = (state: AppState) => state.profile;

// export const getUserInfo = createSelector(
//   getUsersInfo,
//   (state: IInitStateType) => state.userInfo,
// );

export const getLoader = createSelector(
  getPost,
  (state: initStateType) => state.loading,
);

export const getPosts = createSelector(
  getPost,
  (state: initStateType) => state.posts,
);

export const getComments = createSelector(
  getComment,
  (state: initStateType) => state.comments,
);
