import { POSTS, POST_FORM_DATA, NEW_POST_MODE, SHOW_POST } from "./type";
import { getPosts, savePost, getPost } from "../api/posts";
import { browserHistory } from 'react-router';

export const getPostsAction = (status) => {
  return (dispatch) => {
    const posts = 'posts';
    var data = '';
    getPosts()
    .then(res => {
      data = res.data.posts;
      dispatch({type: POSTS, payload: {posts, data}})
    })
    .catch(e => console.log(e))
  }
}

export const postsFormDataAction = (status) => {
  return (dispatch) => {
    const post_form_data = 'post_form_data';
    var data = status;
    dispatch({type: POST_FORM_DATA, payload: {post_form_data, data}})
  }
}

export const setNewPostMode = (status) => {
  return (dispatch) => {
    const new_post_mode = 'new_post_mode';
    var data = status;
    dispatch({type: NEW_POST_MODE, payload: {new_post_mode, data}})
  }
}

export const savePostAction = (status) => {
  return (dispatch) => {
    savePost(status)
    .then(res => {
      browserHistory.push('/home');
    })
    .catch(e => console.log(e))
  }
}

export const getPostAction = (status) => {
  return (dispatch) => {
    const show_post = 'show_post';
    getPost(status)
    .then(res => {
      const data = res.data
      dispatch({type: SHOW_POST, payload: {show_post, data}})
    })
    .catch(e => console.log(e));
  }
}