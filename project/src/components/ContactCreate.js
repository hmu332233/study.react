import React from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  // 입력 값을 받아 state를 바꾼다.
  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  
  // onCreate를 실행하고 state를 초기화한다.
  handleClick() {
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };
    
    this.props.onCreate(contact);
    this.setState({
      name: '',
      phone: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Create Contact</h2>
        <p>
          <input type="text"  name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
          <input type="text"  name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleChange}/>
      	</p>
        <button onClick={this.handleClick}>Create</button>
      </div>
    )
  }
}

ContactCreate.propTypes = {
  onCreate: PropTypes.func
};

ContactCreate.defaultProps = {
  onCreate: () => { console.log('onCreate not definded'); }
}