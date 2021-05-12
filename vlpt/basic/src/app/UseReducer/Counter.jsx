import React, { useState, useReducer } from 'react';

// 현재 상태와 액션 객체를 받아서 새로운 상태를 만들어주는 함수 - reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};


function Counter() {
  const initialState = 0;
  const [number, dispatch] = useReducer(reducer, initialState);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;