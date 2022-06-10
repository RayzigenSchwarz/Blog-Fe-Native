// local
import {IInitStateType, ProfileActions} from './types';
import {
  FETCH_GET_USERINFO_FAILURE,
  FETCH_GET_USERINFO_REQUEST,
  FETCH_GET_USERINFO_SUCCESS,
  FETCH_POST_PROFILE_FAILURE,
  FETCH_POST_PROFILE_SUCCESS,
} from './actionTypes';

const initState: IInitStateType = {
  token: '',
  user: {},
  error: false,
  userInfo: null,
};

export default (state = initState, action: ProfileActions) => {
  switch (action.type) {
    case FETCH_POST_PROFILE_SUCCESS:
      return {
        ...state,
      };

    case FETCH_POST_PROFILE_FAILURE:
      return {
        ...state,
        error: true,
        user: {},
      };

    case FETCH_GET_USERINFO_REQUEST:
      return {
        ...state,
      };

    case FETCH_GET_USERINFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };

    case FETCH_GET_USERINFO_FAILURE:
      return {
        ...state,
        error: true,
        userInfo: {},
      };

    default:
      return {
        ...state,
      };
  }
};
