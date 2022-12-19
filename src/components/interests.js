import React, { Component } from "react";
import '../styles/interests.css';

class Interests extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interests: this.props.interests
    }
     }

     render() {
      const interests = this.props.interests;
      const interestList = interests.map((interest) => 
        <li key={interest.id}>{interest.name}</li>
      )
      return (
        <div className="interests">
          <h3>Interests</h3>
          <ul>{interestList}</ul>
        </div>
      )
     }


}
export default Interests;