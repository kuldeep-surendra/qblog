import { LOGIN_MODAL, LOGIN_INVALID, REGISTER_MODAL } from "../type";
import { login } from "../../api/session";
import { browserHistory } from 'react-router';

export const loginModalOperation = (loginModalStatus, registerModalStatus) => {
  return (dispatch) => {
    var showLoginModal = 'showLoginModal';
    var showRegisterModal = 'showRegisterModal';
    if(loginModalStatus){
      const loginInvalid = 'loginInvalid';
      const data = '';
      dispatch({type: LOGIN_MODAL, payload: {showLoginModal, loginModalStatus}})
      dispatch({type: LOGIN_INVALID, payload: {loginInvalid, data}})
    } else if (registerModalStatus) {
      dispatch({type: REGISTER_MODAL, payload: {showRegisterModal, registerModalStatus}})
    } else { 
      dispatch({type: LOGIN_MODAL, payload: {showLoginModal, loginModalStatus}})
      dispatch({type: REGISTER_MODAL, payload: {showRegisterModal, registerModalStatus}})
    }
  }
}

export const loginToApp = (email, password) => {
  return (dispatch) => {
    login(email, password)
    .then(res => {
      var data = res.data;
      if (data.status === 401) {
        var loginInvalid = 'loginInvalid';
        var dataMessage = data.message;
        dispatch({type: LOGIN_INVALID, payload: {loginInvalid, dataMessage}});
      } else {
        localStorage.setItem('email', data.email);
        localStorage.setItem('token', data.id_token);
        var showLoginModal = 'showLoginModal';
        var status = false;
        dispatch({type: LOGIN_MODAL, payload: {showLoginModal, status}})
        browserHistory.push('/home');
      }
    })
    .catch(e => {
      console.log('err',e)
    })
  }
}