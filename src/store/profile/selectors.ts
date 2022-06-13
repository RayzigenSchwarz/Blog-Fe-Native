import {AppState} from '../rootReducer';

export const getToken = (state: AppState) => state.auth.token;
