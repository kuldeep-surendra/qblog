import { POSTS } from "./type";
import { getPosts } from "../api/posts";

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