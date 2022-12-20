import React, { Component } from "react";
import '../styles/work.css';

class Work extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobs: this.props.jobs
    }
  }

  render() {
    return (
      <div>
        <div className="work"><img alt="" className="icon" src=''></img> Work Experience</div>
        <div className="workCategory">
          <div className="period">Date</div>
          <div className="roles">Description</div>
        </div>
      </div>
    )
  }
}

export default Work;