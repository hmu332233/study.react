import React from 'react';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './modules';

function CounterContainer() {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(actions.increase());
  };
  const handleDecrease = () => {
    dispatch(actions.decrease());
  };

  return (
    <Counter number={value} onIncrease={handleIncrease} onDecrease={handleDecrease} />
  );
}

export default CounterContainer;