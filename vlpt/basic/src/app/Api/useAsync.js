import React, { useState, useEffect, useReducer } from 'react';

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

const initialState = {
  loading: false,
  data: [],
  error: null,
}

const useAsync = (fetch, deps = []) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = () => {
    dispatch({ type: 'LOADING' });
    fetch()
      .then(data => {
        dispatch({ type: 'FULFILLED', data });
      })
      .catch(err => {
        dispatch({ type: 'REJECTED', error: err });
      });
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
};

export default useAsync;