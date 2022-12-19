import React, { Component } from "react";
import { EditText } from "react-edit-text";
import '../styles/personalInfo.css';
import telIcon from '../images/telephone.png';
import mailIcon from '../images/mail.png';
import adressIcon from '../images/address.png';

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: this.props.address,
      tel: this.props.tel,
      email: this.props.email,
      github: this.props.github,
      twitter: this.props.twitter,
      linkedin: this.props.linkedin
    }
  }
  render() {
    return (
      <div className="contactInfo">
        <h3>Contact Information</h3>

        <div><span><img className="icons" src={telIcon} alt=''></img></span>
          <EditText
            name="tel"
            inputClassName="telInput"
            defaultValue={this.props.contacts.tel}
          />
        </div>

        <div><span><img className="icons" src={mailIcon} alt=''></img></span>
          <EditText
            name="mail"
            defaultValue={this.props.contacts.email}
            inputClassName = 'mailInput'
          />
        </div>

        <div><span><img className="icons" src={adressIcon} alt=''></img></span>
          <EditText
            name="address"
            defaultValue={this.props.contacts.address}
            inputClassName = 'addressInput'
          />
        </div>
      </div>
    )
  }

}

export default Contacts;