import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: [],
        error: null,
      };
    case 'FULFILLED':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'REJECTED':
      return {
        loading: false,
        data: [],
        error: action.error,
      }
    default:
      return state;
  }
};

// API로 요청을 할 때 3가지 상태 관리
  // 요청의 결과
  // 로딩 상태
  // 에러
const initialState = {
  loading: false,
  data: [],
  error: null,
}

function Users() {
  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchUsers = () => {
    dispatch({ type: 'LOADING' });
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({ type: 'FULFILLED', data: res.data });
      })
      .catch(err => {
        dispatch({ type: 'REJECTED', error: err });
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
    <button onClick={fetchUsers}>불러오기</button>
    </>
  );

};

export default Users;