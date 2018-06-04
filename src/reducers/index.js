import { combineReducers } from 'redux';
import loginReducer from './sessions/loginReducer';
import logoutReducer from './sessions/logoutReducer';
import postsReducer from './postsReducer';

export default combineReducers({
  login: loginReducer,
  logout: logoutReducer,
  posts: postsReducer
})