import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import Counter from 'containers/Counter';

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
      </div>
    );
  }
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;