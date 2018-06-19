import { logout } from "../../api/session";
import  browserHistory  from '../../history';

export const logoutOfApp = (status) => {
  return (dispatch) => {
    // logout()
    // .then(res => {
    //   if (res.status) {
        localStorage.removeItem('email');
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('scopes');
        browserHistory.push('/');
  //     }
  //   })
  //   .catch(e => console.log(e))
  }
}