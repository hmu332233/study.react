// https://react.vlpt.us/using-typescript/03-ts-manage-state.html
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(v => v + 1);
  const onDecrease = () => setCount(v => v - 1);
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