import { REGISTER_SUCCESS } from '../../actions/type'

const INITIAL_STATE = {
  registerSuccess: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case REGISTER_SUCCESS: 
      return {...state, [action.payload.registerSuccess]:action.payload.data};
    default :
      return state;
  }
}