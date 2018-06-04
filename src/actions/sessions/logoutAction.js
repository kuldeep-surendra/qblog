import { LOGOUT } from "../type";
import { logout } from "../../api/session";
import { browserHistory } from 'react-router';

export const logoutOfApp = (status) => {
  return (dispatch) => {
    const logoutSuccess = 'logoutSuccess';
    const data = '';
    logout()
    .then(res => {
      if (res.status) {
        const data = true;
        // dispatch({type: LOGOUT, payload: {logoutSuccess, data}})
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        browserHistory.push('/');
      }
    })
    .catch(e => console.log(e))
  }
}