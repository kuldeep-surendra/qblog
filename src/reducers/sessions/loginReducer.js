import { LOGIN_MODAL, LOGIN_SUCCESS, LOGIN_INVALID } from '../../actions/type'

const INITIAL_STATE = {
  showLoginModal: false,
  loginInvalid: '',
  loginResponse: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOGIN_MODAL: 
      return {...state, [action.payload.showLoginModal]:action.payload.status};
    default :
      return state;
  }
}