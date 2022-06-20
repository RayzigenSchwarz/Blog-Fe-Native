// local
import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_SUCCESS,
} from './actionTypes';
import {AuthActions, IInitStateType} from './types';

const initState: IInitStateType = {
  token: '',
  user: {},
  error: false,
};

export default (state = initState, action: AuthActions) => {
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.data.data.token,
      };

    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        user: {},
      };

    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.data.data,
      };

    case FETCH_REGISTER_FAILURE:
      return {
        ...state,
        error: true,
        user: {},
      };

    default:
      return {
        ...state,
      };
  }
};
