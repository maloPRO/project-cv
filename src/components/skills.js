import React, { Component } from "react";
import { EditText } from 'react-edit-text';
import '../styles/skills.css';
import uniqid from 'uniqid';

class Skills extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skills: this.props.skills
    }
     }

    addSkill = (e) => {
      this.setState({
        skills: this.props.skills.push({
          name: 'New Skill',
          id: uniqid()
        })
      })
    }

    deleteSkill = (e) => {
      e.target.parentElement.remove();
    }
    show = (e) => {
      e.target.querySelector('button').className = 'show';
      e.target.querySelector('#addSkill').className =  'show';
    }
    hide = (e) => {
      e.target.querySelector('button').className = 'hide';
      e.target.querySelector('#addSkill').className =  'hide';
    }
     render() {
      const skills = this.props.skills;
      const skillsList = skills.map((skill) => 
        <li
          onMouseEnter={this.show}
          onMouseLeave = {this.hide} 
          className="skillList" 
          key={skill.id}>
          <EditText
          name="skills"
          defaultValue= {skill.name}
          inputClassName = 'skillInput'
        />
        <button
          onClick={this.deleteSkill}
          className='hide'
        ></button>
        </li>
      )
      return (
        <div 
          onMouseEnter={this.show}
          onMouseLeave ={this.hide} 
          className="skills">
          <h3>Skills</h3>
          <ul>{skillsList}</ul>
          <div className="add"><button className="hide" id="addSkill" onClick={this.addSkill}>Add Skill</button></div>
        </div>
      )
     }
}
export default Skills;