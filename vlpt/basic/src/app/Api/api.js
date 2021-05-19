import axios from 'axios';

export function getUsers() {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.data);
}

export function getUser(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.data);
}