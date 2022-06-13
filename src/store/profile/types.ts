import {
  FETCH_GET_PROFILE_FAILURE,
  FETCH_GET_PROFILE_REQUEST,
  FETCH_GET_PROFILE_SUCCESS,
  FETCH_PATCH_PROFILE_FAILURE,
  FETCH_PATCH_PROFILE_REQUEST,
  FETCH_PATCH_PROFILE_SUCCESS,
  FETCH_POST_PROFILE_FAILURE,
  FETCH_POST_PROFILE_REQUEST,
  FETCH_POST_PROFILE_SUCCESS,
  FETCH_GET_USERINFO_REQUEST,
  FETCH_GET_USERINFO_SUCCESS,
  FETCH_GET_USERINFO_FAILURE,
} from './actionTypes';

// Post profile

export interface FetchPostProfileSuccessPayload {
  data: string;
}

export interface FetchPostProfileFailurePayload {
  error: string;
}

export interface FetchPostProfileRequest {
  type: typeof FETCH_POST_PROFILE_REQUEST;
}

export type FetchPostProfileSuccess = {
  type: typeof FETCH_POST_PROFILE_SUCCESS;
  payload: FetchPostProfileSuccessPayload;
};

export type FetchPostProfileFailure = {
  type: typeof FETCH_POST_PROFILE_FAILURE;
  payload: FetchPostProfileFailurePayload;
};

// Get profile

export interface FetchGetProfileSuccessPayload {
  data: string;
}

export interface FetchGetProfileFailurePayload {
  error: string;
}

export interface FetchGetProfileRequest {
  type: typeof FETCH_GET_PROFILE_REQUEST;
}

export type FetchGetProfileSuccess = {
  type: typeof FETCH_GET_PROFILE_SUCCESS;
  payload: FetchGetProfileSuccessPayload;
};

export type FetchGetProfileFailure = {
  type: typeof FETCH_GET_PROFILE_FAILURE;
  payload: FetchGetProfileFailurePayload;
};

// Patch profile

export interface FetchPatchProfileSuccessPayload {
  data: string;
}

export interface FetchPatchProfileFailurePayload {
  error: string;
}

export interface FetchPatchProfileRequest {
  type: typeof FETCH_PATCH_PROFILE_REQUEST;
}

export type FetchPatchProfileSuccess = {
  type: typeof FETCH_PATCH_PROFILE_SUCCESS;
  payload: FetchPatchProfileSuccessPayload;
};

export type FetchPatchProfileFailure = {
  type: typeof FETCH_PATCH_PROFILE_FAILURE;
  payload: FetchPatchProfileFailurePayload;
};

export type FetchGetUserinfoRequest = {
  type: typeof FETCH_GET_USERINFO_REQUEST;
};

export type FetchGetUserinfoSuccess = {
  type: typeof FETCH_GET_USERINFO_SUCCESS;
  payload: any;
};

export type FetchGetUserinfoFailure = {
  type: typeof FETCH_GET_USERINFO_FAILURE;
  payload: any;
};

export type ProfileActions =
  | FetchPostProfileRequest
  | FetchPostProfileSuccess
  | FetchPostProfileFailure
  | FetchGetProfileRequest
  | FetchGetProfileSuccess
  | FetchGetProfileFailure
  | FetchPatchProfileRequest
  | FetchPatchProfileSuccess
  | FetchPatchProfileFailure
  | FetchGetUserinfoRequest
  | FetchGetUserinfoSuccess
  | FetchGetUserinfoFailure;

export interface IInitStateType {
  error: any;
  token: string;
  user: object;
  userInfo: IUserInfo | null;
}

export interface IUserInfo {
  iat: number;
  id: string;
  user: string;
}

export interface IPostProfileType {
  userWallpaper?: string;
  name: string | undefined;
  avatar?: string;
  age: number | undefined;
  aboutUser?: string;
  position: string | undefined;
  userId?: string;
}
