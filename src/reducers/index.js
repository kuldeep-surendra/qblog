import { combineReducers } from 'redux';
import loginReducer from './sessions/loginReducer';
import logoutReducer from './sessions/logoutReducer';

export default combineReducers({
  login: loginReducer,
  logout: logoutReducer
})