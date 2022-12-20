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
          <div className="title"><EditText inputClassName="workInput" defaultValue={job.title}/></div>
          <div className="date"><EditText inputClassName="workInput" defaultValue={job.date} /></div>
        </div>
        <div>
          <div className="org"><EditText defaultValue={job.org} /></div>
          <div className="roles"><span>Duties & Responsibilities</span><ul>{job.roles.map((role) => <li key={role.id}><EditText inputClassName="roleInput" defaultValue={role.name} /></li>)}</ul></div>
        </div>
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