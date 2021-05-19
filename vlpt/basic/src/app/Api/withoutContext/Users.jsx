import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import useAsync from './useAsync';

import User from './User';

const fetchUsers = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data);
}

function Users() {
  const [userId, setUserId] = useState();
  const [state, fetchData] = useAsync(fetchUsers, [], true);


  const { data: users, error, loading } = state;

  if (error) {
    return <div>에러!</div>;
  }

  if (loading) {
    return <div>로딩 중..</div>;
  }

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>불러오기</button>
      <User id={userId}/>
    </>
  );

};

export default Users;