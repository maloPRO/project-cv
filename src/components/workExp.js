import React, { Component } from "react";
import { EditText } from "react-edit-text";
import workIcon from '../images/work.png';
import '../styles/work.css';

class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobs: this.props.jobs,
    }
  }

  render() {
    const jobs = this.props.jobs;
    const jobList = jobs.map((job) => 
      <div key={job.id} className='job'>
        <div>
          <div className="title"><EditText defaultValue={job.title}/></div>
          <div className="date"><EditText defaultValue={job.startDate} /> - <EditText defaultValue={job.endDate} /></div>
        </div>
        <div>
          <div className="org"><EditText defaultValue={job.org} /></div>
          <div className="roles"><ul>{job.roles.map((role) => <li key={role.id}><EditText defaultValue={role.name} /></li>)}</ul></div>
        </div>
        <ul>{}</ul>
      </div>
  )
    return (
      <div className="workExp">
        <div className="work"><img alt="" className="icon" src={workIcon}></img> Work Experience</div>
        <div>{jobList}</div>
      </div>
    )
  }
}

export default Work;