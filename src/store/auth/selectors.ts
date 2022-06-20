import {AppState} from '../rootReducer';
import {createSelector} from 'reselect';
import {getUsersInfo} from '../post/selectors';
import {IInitStateType} from './types';

export const getUserInfo = (state: AppState) => state.auth;


export const getToken = createSelector(
  getUsersInfo,
  (state: IInitStateType) => state.token,
);
