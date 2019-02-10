import React from 'react';
import styles from '../styles/styles.scss';
import { LeftPane, RightPane } from '../components';
import { SampleProvider } from '../contexts/sample';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SampleProvider>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
      </SampleProvider>
    );
  }
}

export default App;