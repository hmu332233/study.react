import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import styles from './CounterWithReducer.scss';

const ACTION = {
  RESET: 'reset',
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

const initialState = {
  count: 0
};
const reducer = (state, action) => {
  switch (action) {
    case ACTION.RESET:
      return { count: 0 };
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
function CounterWithReducer(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.CounterWithReducer}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(ACTION.RESET)}>reset</button>
      <button onClick={() => dispatch(ACTION.INCREMENT)}>+1</button>
      <button onClick={() => dispatch(ACTION.DECREMENT)}>-1</button>
    </div>
  );
}

CounterWithReducer.propTypes = {
};
CounterWithReducer.defaultProps = {
};

export default CounterWithReducer;