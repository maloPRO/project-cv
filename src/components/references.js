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

        <div className="refName">
          <EditText name="title" defaultValue={referee.title} inputClassName = 'titleInput'/>
          <EditText name="names" defaultValue={referee.names} inputClassName = 'namesInput' />
        </div>
        <div className="org"><EditText name="org" type="text" inputClassName="orgInput" defaultValue={referee.org} /></div>
        <div className="phone"><b>Phone: </b><EditText name="phone" type="number" inputClassName="phoneInput" defaultValue={referee.phone} /></div>
        <div className="email"><b>Email: </b><EditText name="email" type="email" inputClassName="emailInput" defaultValue={referee.mail} /> </div>
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