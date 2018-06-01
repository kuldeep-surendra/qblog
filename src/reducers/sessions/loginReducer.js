import { LOGIN_MODAL, LOGIN_SUCCESS, LOGIN_INVALID } from '../../actions/type'

const INITIAL_STATE = {
  showLoginModal: false,
  loginInvalid: '',
  loginSuccess: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOGIN_MODAL: 
      return {...state, [action.payload.showLoginModal]:action.payload.status};
    case LOGIN_INVALID:
      return {...state, [action.payload.loginInvalid]:action.payload.data};
    case LOGIN_SUCCESS: 
      return {...state, [action.payload.loginSuccess]:action.payload.success}
    default :
      return state;
  }
}