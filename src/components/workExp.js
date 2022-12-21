import React, { Component } from "react";
import { EditText } from "react-edit-text";
import workIcon from '../images/work.png';
import '../styles/work.css';
import uniqid from 'uniqid';

class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobs: this.props.jobs,
    }

  }
  addJob = (e) => {
    this.setState({
      jobs: this.props.jobs.push({
          id: uniqid(),
          title: 'Job Title',
          org: 'Organization',
          date: 'Month - Year',
          roles: [
            {
              id: uniqid(),
              name: 'Responsibility one'
            },
            {
              id: uniqid(),
              name: 'Responsibility two'
            },
            {
              id: uniqid(),
              name: 'Responsibility three'
            },
            {
              id: uniqid(),
              name: 'Responsibility four'
            },
            {
              id: uniqid(),
              name: 'Responsibility five'
            },
            {
              id: uniqid(),
              name: 'Responsibility six'
            }
          ]
      })
    })
  }
  deletejob = (e) => {
    e.target.parentElement.parentElement.parentElement.remove();  
  }
  hideButton = (e) => {
    e.target.querySelector('#deleteJob').className = 'hideBtn';
    e.target.querySelector('#addWork').className = 'hideBtn';
  }
  hideAdd = (e) => {
    e.target.querySelector('#addWork').className = 'hideBtn';
  }
  showAdd = (e) => {
    e.target.querySelector('#addWork').className = 'showBtn';
  }
  showButton = (e) => {
    e.target.querySelector('#deleteJob').className = 'showBtn';
    e.target.querySelector('#addWork').className = 'showBtn';
  }
  render() {
    const jobs = this.props.jobs;
    const jobList = jobs.map((job) => 
      <div 
        key={job.id} 
        className='job'
        onMouseEnter={this.showButton}
        onMouseLeave={this.hideButton}
        >
        <div>
          <div className="title"><EditText inputClassName="workInput" defaultValue={job.title}/></div>
          <div className="date"><EditText inputClassName="workInput" defaultValue={job.date} /></div>
        </div>
        <div>
          <div className="org">
            <EditText defaultValue={job.org} />
            <button id="deleteJob" onClick={this.deletejob} className="hide"></button>
          </div>
          <div className="roles"><span>Duties & Responsibilities</span><ul>{job.roles.map((role) => <li key={role.id}><EditText inputClassName="roleInput" defaultValue={role.name} /></li>)}</ul></div>
        </div>
      </div>
  )
    return (
      <div 
        className="workExp">
        <div 
          onMouseEnter={this.showAdd}
          onMouseLeave={this.hideAdd}          
          className="work">
            <div><img alt="" className="icon" src={workIcon}></img>Work Experience</div> 
            <div className="btnn"><button id="addWork" onClick={this.addJob} className='hideBtn'>Add Job</button></div>
        </div>
        <div>{jobList}</div>
        
      </div>
    )
  }
}

export default Work;