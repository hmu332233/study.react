// https://react.vlpt.us/using-typescript/03-ts-manage-state.html
import React, { useState, useReducer } from 'react';

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default: 
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;