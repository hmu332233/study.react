import React, { useContext, useEffect } from 'react';
import axios from 'axios';

// import useAsync from './useAsync';
// import { useAsync } from 'react-async';
import { UsersStateContext, UsersDispatchContext, getUser } from './UsersContext';

function User({ id }) {
  const state = useContext(UsersStateContext);
  const dispatch = useContext(UsersDispatchContext);

  useEffect(() => {
    getUser(dispatch, id);
  }, [id])

  const { data: user, loading, error } = state.user;

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