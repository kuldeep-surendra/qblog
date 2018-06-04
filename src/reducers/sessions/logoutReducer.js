import { LOGOUT } from '../../actions/type'

const INITIAL_STATE = {
  logout: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case LOGOUT: 
      return {...state, [action.payload.logout]:action.payload.status};
    default :
      return state;
  }
}