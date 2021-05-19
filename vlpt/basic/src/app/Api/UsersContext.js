import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

// UsersContext 에서 사용 할 기본 상태
const initialState = {
  users: {
    loading: false,
    data: [],
    error: null
  },
  user: {
    loading: false,
    data: [],
    error: null
  }
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: [],
  error: null
};

// 성공했을 때의 상태 만들어주는 함수
const success = data => ({
  loading: false,
  data,
  error: null
});

// 실패했을 때의 상태 만들어주는 함수
const error = error => ({
  loading: false,
  data: [],
  error: error
});

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data)
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error)
      };
    case 'GET_USER':
      return {
        ...state,
        user: loadingState
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data)
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error)
      };
    default:
      return state;
  }
}

export const UsersStateContext = createContext();
export const UsersDispatchContext = createContext();


export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersDispatchContext.Provider value={dispatch}>
      <UsersStateContext.Provider value={state}>
        {children}
      </UsersStateContext.Provider>
    </UsersDispatchContext.Provider>
  );
};

export function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      dispatch({ type: 'GET_USERS_SUCCESS', data: res.data });
    })
    .catch(err => {
      dispatch({ type: 'GET_USERS_ERROR', error: err });
    });
};

export function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      dispatch({ type: 'GET_USER_SUCCESS', data: res.data });
    })
    .catch(err => {
      dispatch({ type: 'GET_USER_ERROR', error: err });
    });
};