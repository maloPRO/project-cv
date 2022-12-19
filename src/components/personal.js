import React, { Component } from "react";
import { EditText } from 'react-edit-text';
import '../styles/personalInfo.css';
import sample from '../images/sample.jpg';


class PersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: this.props.name,
        title: this.props.title,
        profile: this.props.profile
      }
    }
  }
  render () {
    return (
      <div className="personalInfo">
        <img src={sample} className='dp' alt=""></img>
        <EditText
         name="name"
         defaultValue={this.props.user.name}
         inputClassName = 'nameInput'
         className="name"
         />
        <EditText
         name="name"
         defaultValue={this.props.user.title}
         inputClassName = 'titleInput'
         className="title"
         />
      </div>
    )
  }
}

export default PersonalInfo;