import {combineReducers} from 'redux';
import postReducer from './post/reducer';
import profileReducer from './profile/reducer';

const rootReducer = combineReducers({
  // todo: todoReducer,
  // auth: authReducer,
  post: postReducer,
  // colleague: colleaguesReducer,
  profile: profileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
