import React from 'react';

class ContactDetails extends React.Component {
  render() {
    //선택된 아이가 있을 때 출력되는 컴포넌트
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
    //선택된 아이가 없을 때 출력되는 컴포넌트
    const blank = (<div>not select</div>);
    return(
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? details : blank}
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact : {
    name: '',
    phone: ''
  }
}

export default ContactDetails;

