import React, { useState, useContext, useEffect, useReducer } from 'react';

import { UsersProvider, UsersStateContext, UsersDispatchContext, getUsers  } from './UsersContext';

import User from './User';


function Users() {
  const [userId, setUserId] = useState();

  const state = useContext(UsersStateContext);
  const dispatch = useContext(UsersDispatchContext);

  const fetchUsers = () => getUsers(dispatch);

  useEffect(() => {
    fetchUsers();
  }, [])

  const { data: users, error, loading } = state.users;

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
      <button onClick={fetchUsers}>불러오기</button>
      <User id={userId}/>
    </>
  );
};

function UsersWithProvider() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default UsersWithProvider;