import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.scss';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.Counter}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

Counter.propTypes = {
};
Counter.defaultProps = {
};

export default Counter;