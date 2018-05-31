import { LOGIN_MODAL, LOGIN_SUCCESS, LOGIN_INVALID } from "../type";
import { login } from "../../api/login";

export const loginModalOperation = (status) => {
  return (dispatch) => {
    var showLoginModal = 'showLoginModal';
    dispatch({type: LOGIN_MODAL, payload: {showLoginModal, status}})
  }
}

export const loginToApp = (email, password) => {
  return (dispatch) => {
    login(email, password)
    .then(res => {
      if (res.data.status === 401) {
        var loginInvalid = 'loginInvalid';
        var data = res.data.message;
        dispatch({type: LOGIN_INVALID, payload: {loginInvalid, data}});
      } else {
        var loginSuccess = 'loginSuccess';
        var data = res.data;
        dispatch({type: LOGIN_SUCCESS, payload: {loginSuccess, data}})
      }
    })
    .catch(e => {
      console.log('err',e)
    })
  }
}