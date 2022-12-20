import React, { Component } from "react";
import { EditText } from 'react-edit-text';
import '../styles/skills.css';
import skillICon from '../images/skill.png';

class Skills extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skills: this.props.skills
    }
     }

     render() {
      const skills = this.props.skills;
      const skillsList = skills.map((skill) => 
        <li key={skill.id}>
          <EditText
          name="skills"
          defaultValue= {skill.name}
          inputClassName = 'skillInput'
        />
        </li>
      )
      return (
        <div className="skills">
          <div className="skill"><img alt="" className="icon" src={skillICon}></img> Skills</div>
          <ul>{skillsList}</ul>
        </div>
      )
     }
}
export default Skills;