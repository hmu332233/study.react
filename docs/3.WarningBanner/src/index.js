import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './form';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  
  return (
    <div className='warning'>
    	Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  
  render() {
    return (
      <div>
      	<WarningBanner warn={this.state.showWarning} />
      	<button onClick={this.handleToggleClick}>
      		{this.state.showWarning ? 'Hide' : 'Show'}
      	</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
  	<Page />
  	<Form />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
