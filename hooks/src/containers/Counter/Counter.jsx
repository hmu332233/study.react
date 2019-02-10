import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.scss';

function Counter(props) {
  const [count, setCount] = useState(0);

  // 컴포넌트가 mount되거나 리렌더링 될 때 콜백 함수 호출
  // componentDidMount, componentDidUpdate와 동일
  useEffect(() => {
    console.log(`count: ${count}`)
  })

  // 배열의 값이 변경될 경우에는 useEffect의 함수 호출
  // 컴포넌트가 mount되거나 count값이 변경 되었을 때만 콜백 함수 호출
  useEffect(() => {
    console.log(`count: ${count}`)
  }, [count])

  useEffect(() => {
    console.log('componentDidMount와 동일!')
  }, [])
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