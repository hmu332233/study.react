import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

import * as api from './api';
import { createAsyncDispatcher, createAsyncHandler, initialAsyncState } from './asyncActionUtils';

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);
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

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);
