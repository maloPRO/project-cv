import React, { Component } from "react";
import { EditText } from 'react-edit-text';
import '../styles/interests.css';
import uniqid from 'uniqid'

class Interests extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interests: this.props.interests
    }
    
     }

     delete = (e) => {
      e.target.parentElement.remove()
    }
    show = (e) => {
      e.target.querySelector('button').className = 'show';
      e.target.querySelector('#addInterest').className =  'show';
    }
    hide = (e) => {
      e.target.querySelector('button').className = 'hide';
      e.target.querySelector('#addInterest').className =  'hide';
    }
    add = (e) => {
      this.setState({
        interests: this.props.interests.push({name: 'New Interest', id: uniqid()})
      })
    }

     render() {
      const interests = this.props.interests;
      const interestList = interests.map((interest) => 
        <li
          onMouseEnter={this.show}
          onMouseLeave = {this.hide} 
          key={interest.id}>
            <EditText
            name="interests"
            defaultValue= {interest.name}
            inputClassName = 'interestInput'
         />
         <button 
          className="hide"
          onClick={this.delete}
          ></button>
        </li>
      )
      return (
        <div 
          onMouseEnter={this.show}
          onMouseLeave = {this.hide}
          className="interests">
          <h3>Interests</h3>
          <ul>{interestList}</ul>
          <button id="addInterest" className="hide" onClick={this.add}>Add interest</button>
        </div>
      )
     }
}

export default Interests;