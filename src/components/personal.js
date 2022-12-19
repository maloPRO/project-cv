import React, { Component } from "react";
import ProfilePic from "./profilePic";
import { EditText } from 'react-edit-text';
import '../styles/personalInfo.css';

class PersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        name: this.props.name,
        title: this.props.title,
      }
    }
  }
  render () {
    return (
      <div className="personalInfo">
        <div className="picContainer">
          <ProfilePic/>
        </div>
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