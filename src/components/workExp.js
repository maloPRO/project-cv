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
            }
          ]
      })
    })
  }

  addRole = (e) => {
    this.setState({
      jobs: this.props.jobs.map((job) => 
        job.roles.push({
          name: 'rolee',
          id: uniqid()
        })
      )
    })
  }
  deletejob = (e) => {
    e.target.parentElement.parentElement.parentElement.remove();  
  }
  deleteRole = (e) => {
    e.target.parentElement.remove();
  }
  hideDeleteJobBtn = (e) => {
    e.target.querySelector('#deleteJob').className = 'hideBtn';
  }
  showDeleteJobBtn = (e) => {
    e.target.querySelector('#deleteJob').className = 'showBtn';
  }
  hideAddJobBtn = (e) => {
    e.target.querySelector('#addWork').className = 'hideBtn';
  }
  showAddJobBtn = (e) => {
    e.target.querySelector('#addWork').className = 'showBtn';
  }
  hideDeleteRoleBtn = (e) => {
    e.target.querySelector('#deleteRole').className = 'hideBtn';
  }
  showDeleteRoleBtn = (e) => {
    e.target.querySelector('#deleteRole').className = 'showBtn';
  }
  hideAddRoleBtn = (e) => {
    e.target.querySelector('#addRole').className = 'hideBtn';
  }
  showAddRoleBtn = (e) => {
    e.target.querySelector('#addRole').className = 'showBtn';
  }
  render() {
    const jobs = this.props.jobs;
    const jobList = jobs.map((job) => 
      <div key={job.id} className='job' onMouseEnter={this.showDeleteJobBtn} onMouseLeave={this.hideDeleteJobBtn}>
        <div>
          <div className="title"><EditText inputClassName="workInput" defaultValue={job.title}/></div>
          <div className="date"><EditText inputClassName="workInput" defaultValue={job.date} /></div>
        </div>
        <div>
          <div className="org">
            <EditText defaultValue={job.org} />
            <button id="deleteJob" onClick={this.deletejob} className="hide"></button>
          </div>
          <div className="roles" onMouseEnter={this.showAddRoleBtn} onMouseLeave={this.hideAddRoleBtn} >
            <div className="duties" >
              <div className="dutyTitle">Duties & Responsibilities</div>
              <button onClick={this.addRole} className='hide' id="addRole">Add Role</button>
            </div>
            <ul>{job.roles.map((role) =>
              <li key={role.id} onMouseEnter={this.showDeleteRoleBtn} onMouseLeave={this.hideDeleteRoleBtn}>
                <EditText inputClassName="roleInput"
                defaultValue={role.name} />
                <button id="deleteRole" onClick={this.deleteRole} className='hideBtn'></button>
              </li>)}
           </ul>
          </div>
        </div>
      </div>
  )
    return (
      <div 
        className="workExp">
        <div 
          onMouseEnter={this.showAddJobBtn}
          onMouseLeave={this.hideAddJobBtn}          
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