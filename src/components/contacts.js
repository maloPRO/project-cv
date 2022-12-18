import React, { Component } from "react";
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
        <p> <div><img className="icons" src={telIcon} alt=''></img></div> {this.props.contacts.tel}</p>
        <p><div><img className="icons" src={mailIcon} alt=''></img></div>{this.props.contacts.email}</p>
        <p><div><img className="icons" src={adressIcon} alt=''></img></div>{this.props.contacts.address}</p>
      </div>
    )
  }

}

export default Contacts;