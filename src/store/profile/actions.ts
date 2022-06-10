// local
import {
  FETCH_GET_PROFILE_FAILURE,
  FETCH_GET_PROFILE_REQUEST,
  FETCH_GET_PROFILE_SUCCESS,
  FETCH_GET_USERINFO_FAILURE,
  FETCH_GET_USERINFO_REQUEST,
  FETCH_GET_USERINFO_SUCCESS,
  FETCH_PATCH_PROFILE_FAILURE,
  FETCH_PATCH_PROFILE_REQUEST,
  FETCH_PATCH_PROFILE_SUCCESS,
  FETCH_POST_PROFILE_FAILURE,
  FETCH_POST_PROFILE_REQUEST,
  FETCH_POST_PROFILE_SUCCESS,
} from './actionTypes';
import {
  FetchGetProfileFailure,
  FetchGetProfileSuccess,
  FetchPatchProfileFailure,
  FetchPatchProfileSuccess,
  FetchPostProfileFailure,
  FetchPostProfileSuccess,
  IPostProfileType,
} from './types';

// POST PROFILE

export const fetchPostProfileRequest = (data: IPostProfileType) => {
  return {
    type: FETCH_POST_PROFILE_REQUEST,
    payload: data,
  };
};

export const fetchPostProfileSuccess = ({
  payload,
}: {
  payload: FetchPostProfileSuccess;
}) => {
  return {
    type: FETCH_POST_PROFILE_SUCCESS,
    payload,
  };
};

export const fetchPostProfileFailure = ({
  error,
}: {
  error: FetchPostProfileFailure;
}) => {
  return {
    type: FETCH_POST_PROFILE_FAILURE,
    error,
  };
};

// GET PROFILE

export const fetchGetProfileRequest = (data: IPostProfileType) => {
  return {
    type: FETCH_GET_PROFILE_REQUEST,
    payload: data,
  };
};

export const fetchGetProfileSuccess = ({
  payload,
}: {
  payload: FetchGetProfileSuccess;
}) => {
  return {
    type: FETCH_GET_PROFILE_SUCCESS,
    payload,
  };
};

export const fetchGetProfileFailure = ({
  error,
}: {
  error: FetchGetProfileFailure;
}) => {
  return {
    type: FETCH_GET_PROFILE_FAILURE,
    error,
  };
};

// PATCH PROFILE

export const fetchPathProfileRequest = (data: IPostProfileType) => {
  return {
    type: FETCH_PATCH_PROFILE_REQUEST,
    payload: data,
  };
};

export const fetchPathProfileSuccess = ({
  payload,
}: {
  payload: FetchPatchProfileSuccess;
}) => {
  return {
    type: FETCH_PATCH_PROFILE_SUCCESS,
    payload,
  };
};

export const fetchPathProfileFailure = ({
  error,
}: {
  error: FetchPatchProfileFailure;
}) => {
  return {
    type: FETCH_PATCH_PROFILE_FAILURE,
    error,
  };
};

// GET USERINFO

export const fetchGetUserinfoRequest = (userId?: string) => {
  return {
    type: FETCH_GET_USERINFO_REQUEST,
    userId,
  };
};

export const fetchGetUserinfoSuccess = (payload: IPostProfileType) => {
  return {
    type: FETCH_GET_USERINFO_SUCCESS,
    payload,
  };
};

export const fetchGetUserinfoFailure = (error: any) => {
  return {
    type: FETCH_GET_USERINFO_FAILURE,
    error,
  };
};
