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
      <div key={referee.id} className="referee">
        <p>{referee.title} {referee.names}</p>
        <p>{referee.org}</p>
        <p><b>Phone: </b>{referee.phone}</p>
        <p><b>Email: </b>{referee.mail}</p>
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