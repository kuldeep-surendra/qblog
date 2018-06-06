import { POSTS, POST_FORM_DATA, NEW_POST_MODE } from '../actions/type'

const INITIAL_STATE = {
  posts: [{id: 1, content: '', title: '', user: {username: ''}, comments: [{}]}],
  post_form_data: {},
  new_post_mode: 'createMode'
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case POSTS: 
      return {...state, [action.payload.posts]:action.payload.data};
    case POST_FORM_DATA:
      return {...state, [action.payload.post_form_data]:action.payload.data}
    case NEW_POST_MODE:
      return {...state, [action.payload.new_post_mode]:action.payload.data}
    default :
      return state;
  }
}