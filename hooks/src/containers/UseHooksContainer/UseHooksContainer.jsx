import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './UseHooksContainer.scss';

import axios from 'axios';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  
  const onChange = e => {
    const { target : { value }} = e;
    setValue(value);
  };
  
  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  const callUrl = () => {
    axios.get(url)
      .then(response => {
        setPayload(response.data);
      })
      .catch(error => {
        setError("error!");
      })
      .then(function () {
        setIsLoading(false);// always executed
      });
  }
  
  useEffect(callUrl, []);
  
  return { payload, isLoading, error };
}

function UseHooksContainer(props) {
  const name = useInput('');
  const { payload, isLoading, error } = useFetch('https://aws.random.cat/meow');
  return (
    <div className={styles.UseHooksContainer}>
      <input {...name} placeholder="whats yours name" />
      <br />
      {isLoading && <span>loading your cat</span>}
      {!isLoading && error && <span>{error}</span>}
      {!isLoading && payload && <img src={payload.file} width="250"/>}
    </div>
  );
};

UseHooksContainer.propTypes = {
};
UseHooksContainer.defaultProps = {
};

export default UseHooksContainer;