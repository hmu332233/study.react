import React, {Component} from 'react';
import Hello from 'components/Hello';
import ButtonGroup from 'components/ButtonGroup';

class App extends Component {
    state = {
        number: 0
    }
    componentDidMount() {
        const increment = () => {
            this.setState({
                number: this.state.number + 1
            });
            setTimeout(increment, 1000);
        }
        increment();
    }
    
    render() {
        return (
          <div>
          	<Hello name={`React with Webpack2 (${this.state.number})`}/>
          	<ButtonGroup/>
          </div>
        );
    }
}

export default App;
