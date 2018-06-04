import { POSTS } from '../actions/type'

const INITIAL_STATE = {
  posts: [{id: 1, content: '', title: '', user: {username: ''}, comments: [{}]}]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case POSTS: 
      return {...state, [action.payload.posts]:action.payload.data};
    default :
      return state;
  }
}