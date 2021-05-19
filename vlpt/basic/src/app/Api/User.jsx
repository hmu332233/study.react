import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import useAsync from './useAsync';


const fetchUser = (id) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.data);
}

function User({ id }) {
  const [state, fetchData] = useAsync(() => fetchUser(id), [id]);
  const { data: user, error, loading } = state;

  if (error) {
    return <div>에러!</div>;
  }

  if (loading) {
    return <div>로딩 중..</div>;
  }

  if (!user) {
    return <div></div>;
  }

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );

};

export default User;