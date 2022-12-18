import React, { Component } from "react";
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
      <div className="referee">
        <p>{referee.title} {referee.names}</p>
        <p>{referee.org}</p>
        <p>{referee.phone}</p>
        <p>{referee.mail}</p>
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