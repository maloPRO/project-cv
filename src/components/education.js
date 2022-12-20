import React, { Component } from "react";
import { EditText } from "react-edit-text";
import eduIcon from '../images/education.png'
import '../styles/education.css';

class Education extends Component {
  constructor(props) {
    super(props)

    this.state = {
      schoools: this.props.schoools
    }
  }

  render() {
    const schools = this.props.schools;
    const schoolList = schools.map((school) => 
      <div key={school.id} className="school">
        <div className="schoolName"><EditText inputClassName="workInput" defaultValue={school.name} /></div>
        <div className="course"><EditText inputClassName="workInput" defaultValue={school.course} /></div>
        <div className="year"><EditText inputClassName="workInput" defaultValue={school.year} /></div>
        <div className="honors"><EditText inputClassName="workInput" defaultValue={school.honors} /></div>
      </div>
    )
    return (
      <div className="education">
        <div className="eduTitle"><img src={eduIcon} alt= ''></img> Education</div>
        <div className="schools">{schoolList}</div>
      </div>
    )
  }
}

export default Education;