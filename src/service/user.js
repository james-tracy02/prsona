
import axios from 'axios';
const url = 'https://prsona-api.herokuapp.com';

function createUser(user) {
  return axios.post(`${url}/users`, user);
}

function login(username, password) {
  const user = { username, password };
  return axios.post(`${url}/login`, user);
}

export default {
  createUser,
  login,
};
