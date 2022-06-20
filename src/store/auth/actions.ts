// local
import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_CHANGE_PASSWORD_REQUEST,
  FETCH_CHANGE_PASSWORD_SUCCESS,
  FETCH_CHANGE_PASSWORD_FAILURE,
} from './actionTypes';
import {
  FetchLoginSuccess,
  FetchLoginFailure,
  FetchRegisterSuccess,
  FetchRegisterFailure,
  IDataType,
  FetchChangePasswordFailure,
  FetchChangePasswordSuccess,
} from './types';

// LOGIN

export const fetchLoginRequest = (data: IDataType) => {
  return {
    type: FETCH_LOGIN_REQUEST,
    payload: data,
  };
};

export const fetchLoginSuccess = ({payload}: {payload: FetchLoginSuccess}) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload,
  };
};

export const fetchLoginFailure = ({error}: {error: FetchLoginFailure}) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    error,
  };
};

// REGISTER

export const fetchRegisterRequest = (data: IDataType) => {
  return {
    type: FETCH_REGISTER_REQUEST,
    payload: data,
  };
};

export const fetchRegisterSuccess = ({
  payload,
}: {
  payload: FetchRegisterSuccess;
}) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload,
  };
};

export const fetchRegisterFailure = ({
  error,
}: {
  error: FetchRegisterFailure;
}) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    error,
  };
};

// CHANGE PASSWORD

export const fetchChangePasswordRequest = ({
  password_old,
  password_new,
}: IDataType) => {
  return {
    type: FETCH_CHANGE_PASSWORD_REQUEST,
    payload: {password_old, password_new},
  };
};

export const fetchChangePasswordSuccess = ({
  payload,
}: {
  payload: FetchChangePasswordSuccess;
}) => {
  return {
    type: FETCH_CHANGE_PASSWORD_SUCCESS,
    payload,
  };
};

export const fetchChangePasswordFailure = ({
  error,
}: {
  error: FetchChangePasswordFailure;
}) => {
  return {
    type: FETCH_CHANGE_PASSWORD_FAILURE,
    error,
  };
};
