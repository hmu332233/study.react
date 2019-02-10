import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.scss';

function Form(props) {

  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={styles.Form}>
      <input ref={inputRef}/>
      <button onClick={handleButtonClick}>focus the input!</button>
    </div>
  );
}

Form.propTypes = {
};
Form.defaultProps = {
};

export default Form;