import React, { Component } from "react";
import { EditText } from "react-edit-text";
import '../styles/ref.css'

class References extends Component {
  constructor(props) {
    super(props)

    this.state = {
      referees: this.props.referees
    }
  }

  render() {
    const referees = this.props.referees;
    const refereeList = referees.map((referee) => 
      <div key={referee.id} className="referee">
        <div className="name"><EditText defaultValue={referee.title} /><EditText defaultValue={referee.names} /></div>
        <div className="refOrg"><EditText defaultValue={referee.org} /></div>
        <div className="phone"><b>Phone:  </b><EditText defaultValue={referee.phone} /></div>
        <div className="mail"><b>Email: </b><EditText defaultValue={referee.mail} /></div>
      </div>
    )
    return (
      <div className="references">
        <h3>References</h3>
        <div>{refereeList}</div>
      </div>
    )
  }
  
}

export default References;