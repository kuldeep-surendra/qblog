import axios from 'axios';
import { ROOT_URL } from './api_config';

function headers() {
  return {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Email': localStorage.getItem('email'),
    'Content-Type': 'application/json'
  };
}

export const getPosts = (params) => {
  return axios({method: 'get', url: `${ROOT_URL}/posts`, headers: headers()});
}

export const savePost = (params) => {
  return axios({
    method: 'post', 
    url: `${ROOT_URL}/posts`, 
    headers: headers(), 
    data: {
      title: params.title,
      description: params.description,
      content: params.content
    }
  });
}