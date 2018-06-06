import { logout } from "../../api/session";
import { browserHistory } from 'react-router';

export const logoutOfApp = (status) => {
  return (dispatch) => {
    logout()
    .then(res => {
      if (res.status) {
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        browserHistory.push('/');
      }
    })
    .catch(e => console.log(e))
  }
}