import { combineReducers } from 'redux';
import loginReducer from './sessions/loginReducer';

export default combineReducers({
  login: loginReducer
})