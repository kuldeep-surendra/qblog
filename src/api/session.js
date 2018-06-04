import axios from 'axios';
import { ROOT_URL } from './api_config';

export const login = (params) => {
  // 54.84.232.25
  return axios.post(`${ROOT_URL}/login`, {
      email: params.username,
      password: params.password
    })
}

export const logout = (params) => {
  let headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Email': localStorage.getItem('email'),
    'Content-Type': 'application/json'
  }
  return axios({method: 'post', url: `${ROOT_URL}/logout`, headers: headers});
}