import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import CounterWithReducer from 'containers/CounterWithReducer';
import Counter from 'containers/Counter';
import Form from 'containers/Form';
import UseHooksContainer from 'containers/UseHooksContainer';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.MainApp}>
        <Counter />
        <Form />
        <CounterWithReducer />
        <UseHooksContainer />
      </div>
    );
  }
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;