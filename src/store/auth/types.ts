import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_CHANGE_PASSWORD_SUCCESS,
  FETCH_CHANGE_PASSWORD_FAILURE,
} from './actionTypes';

export interface FetchAuthSuccessPayload {
  data: ResponseData;
}

type ResponseData = {
  data: PayloadData;
};

type PayloadData = {
  token: string;
  userData: UserData;
};

type UserData = {
  iat: number;
  id: string;
  user: string;
};

export interface FetchLoginFailurePayload {
  error: string;
}

export interface FetchRegisterFailurePayload {
  error: string;
}

export interface FetchLoginRequest {
  type: typeof FETCH_LOGIN_REQUEST;
}

export type FetchLoginSuccess = {
  type: typeof FETCH_LOGIN_SUCCESS;
  payload: FetchAuthSuccessPayload;
};

export type FetchLoginFailure = {
  type: typeof FETCH_LOGIN_FAILURE;
  payload: FetchLoginFailurePayload;
};

export interface FetchRegisterRequest {
  type: typeof FETCH_REGISTER_REQUEST;
}

export type FetchRegisterSuccess = {
  type: typeof FETCH_REGISTER_SUCCESS;
  payload: FetchAuthSuccessPayload;
};

export type FetchRegisterFailure = {
  type: typeof FETCH_REGISTER_FAILURE;
  payload: FetchRegisterFailurePayload;
};

export type AuthActions =
  | FetchLoginRequest
  | FetchLoginSuccess
  | FetchLoginFailure
  | FetchRegisterRequest
  | FetchRegisterSuccess
  | FetchRegisterFailure;

export interface IInitStateType {
  error: any;
  token: string;
  user: object;
}

export interface IDataType {
  username?: string;
  password?: string;
  confirmPassword?: string;
  password_new?: string;
  password_old?: string;
  token?: string | null;
}

export interface FetchChangePasswordPayload {
  data: string;
}

export interface FetchChangePasswordFailurePayload {
  error: string;
}

export type FetchChangePasswordSuccess = {
  type: typeof FETCH_CHANGE_PASSWORD_SUCCESS;
  payload: FetchChangePasswordPayload;
};

export type FetchChangePasswordFailure = {
  type: typeof FETCH_CHANGE_PASSWORD_FAILURE;
  payload: FetchChangePasswordFailurePayload;
};
