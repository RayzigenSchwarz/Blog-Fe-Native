import {combineReducers} from 'redux';
import postReducer from './post/reducer';
// import profileReducer from './profile/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  // colleague: colleaguesReducer,
  // profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
