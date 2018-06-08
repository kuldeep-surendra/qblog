import { browserHistory } from 'react-router';
import { register } from "../../api/session";
import { REGISTER_SUCCESS, REGISTER_MODAL } from '../type';

export const registerAction = (status) => {
  return (dispatch) => {
    register(status)
    .then(res => {
      var registerSuccess = 'registerSuccess';
      var data;
      var registerData = true;
      var showRegisterModal = 'showRegisterModal';
      if (res.data.err) {
          data = res.data.err;
          dispatch({type: REGISTER_SUCCESS, payload: {registerSuccess, data}})
      } else {
        data = res.data.message;
        registerData = false;
        dispatch({type: REGISTER_SUCCESS, payload: {registerSuccess, data}});
        dispatch({type: REGISTER_MODAL, payload: {showRegisterModal, registerData}});
      }
    })
    .catch(e => {
      console.log("err",e)
    })
  }
}