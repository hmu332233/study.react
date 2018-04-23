import React from 'react';
import styles from '../styles/styles.scss';
import { LeftPane, RightPane } from '../components';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
    );
  }
}


export default App;