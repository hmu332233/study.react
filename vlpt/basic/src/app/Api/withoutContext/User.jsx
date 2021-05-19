import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

// import useAsync from './useAsync';
import { useAsync } from 'react-async';


const fetchUser = ({ id }) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.data);
}

function User({ id }) {
  const { data: user, error, isLoading } = useAsync({
    promiseFn: fetchUser,
    id,
    watch: id,
  });

  if (error) {
    return <div>에러!</div>;
  }

  if (isLoading) {
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