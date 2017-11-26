import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';

import update from 'react-addons-update';

export default class Contact extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: '',
      contactData: [{
          name: 'Abet',
          phone: '010-0000-0001'
        }, {
          name: 'Betty',
          phone: '010-0000-0002'
        }, {
          name: 'Charlie',
          phone: '010-0000-0003'
        }, {
          name: 'David',
          phone: '010-0000-0004'
      }]
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  
  //컴포넌트가 DOM위에 생성되기 직전에 실행되는 함수
  componentWillMount() {
    const contactData = localStorage.contactData;
    
    if(contactData) {
      this.setState({
        contactData: JSON.parse(contactData)
      });
    }
  }
  
  //컴포넌트가 업데이트 된 후 실행되는 함수
  componentDidUpdate(prevProps, prevState) {
    //업데이트 이전 contactData와 현재 contactData가 다르다면
    if (JSON.stringify(prevState.contactData) != JSON.stringify(this.state.ContactData)) {
      localStorage.contactData = JSON.stringify(this.state.contactData);
    }
  }
  
  // input에 입력이 들어올때마다 호출이 되는 함수
  // e {obeject}: event 객체
  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }
  
  // 이 메소드가 실행되면 selectedKey가 수정된다.
  handleClick(key) {
    this.setState({
      selectedKey: key
    });
    console.log(key, 'is selected');
  }
  
  handleCreate(contact) {
    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $push: [contact]
        }
      )
    });
  }
  
  handleRemove() {
    if(this.state.selectedKey === -1) return;
    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $splice: [[this.state.selecedKey, 1]]
        }
      )
    });
    this.state.selectedKey = -1;
  }
  
  handleEdit(name, phone) {
    this.setState({
      contactData: update(this.state.contactData,
    	{
        [this.state.selectedKey]: {
   	      name: { $set: name },
    	    phone: { $set: phone }
        }
      })
    });
	}

  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter((contact) => {
        return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
      });
      return data.map((contact, i) => {
        return (<ContactInfo 
                contact={contact} 
                key={i}
                onClick={() => this.handleClick(i)}
                />);
      });
    };
    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails 
					isSelected={this.state.selectedKey != -1}
					contact={this.state.contactData[this.state.selectedKey]}
					onRemove={this.handleRemove}
					onEdit={this.handleEdit}
				/>
        <ContactCreate
        	onCreate={this.handleCreate}
				/>
      </div>
    );
  }
}