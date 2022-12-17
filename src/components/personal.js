import React, { Component } from "react";
import '../styles/personalInfo.css';
import sample from '../images/sample.jpg';

class PersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.name,
      title: this.props.title,
      profile: this.props.profile
    }
  }
  render () {
    return (
      <div className="personalInfo">
        <img src={sample} className='dp' alt=""></img>
        <p className="name">{this.props.user.name} </p>
        <p className="title">{this.props.user.title}</p>
      </div>
    )
  }
}

export default PersonalInfo;