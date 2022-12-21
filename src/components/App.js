import React, { Component } from 'react';
import PersonalInfo from './personal';
import '../styles/App.css';
import Contacts from './contacts';
import Interests from './interests';
import References from './references';
import uniqid from 'uniqid';
import Work from './workExp';
import Education from './education';
import Skills from './skills';


class App extends Component {
  constructor(props) {
    super(props)

    this.state =  {
      user: {
        name: 'Your Name',
        title: 'Job Title',
      },
      contacts: {
        tel: '+1 234 567 890',
        email: 'example@email.com',
        address: 'City, Country',
      },
      interests: [
        {
          name: 'Interest 1',
          id: uniqid()
        },
        {
          name: 'Interest 2',
          id: uniqid()
        },
        {
          name: 'Interest 3',
          id: uniqid()
        }
      ],
      referees: [
        {
          title: 'Mr/Mrs.',
          names: 'Name Surname',
          org: 'Organization',
          phone: '+1 234 567 890',
          mail: 'example@email.com',
          id: uniqid()
        },
        {
          title: 'Mr/Mrs.',
          names: 'Name Surname',
          org: 'Organization',
          phone: '+1 234 567 890',
          mail: 'example@email.com',
          id: uniqid()
        }
      ],
      jobs: [
        { 
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
        }
      ],
      schools: [
        {
          name: 'School Name',
          year: 'Year',
          course: 'Course',
          honors: 'Honors',
          id: uniqid()
        },
        {
          name: 'School Name',
          year: 'Year',
          course: 'Course',
          honors: 'Honors',
          id: uniqid()
        }
      ],
      skills: [
        {
          name: 'Skill 1',
          id: uniqid()
        },
        {
          name: 'skill 2',
          id: uniqid()
        },
        {
          name: 'Skill 3',
          id: uniqid()
        }
      ]
    }
  }
  render() {
    return(
      <div className='app'>
        <div className='left'>
          <PersonalInfo user = {this.state.user}/>
          <Contacts contacts = {this.state.contacts} />
          <Skills skills = {this.state.skills} />
          <Interests interests = {this.state.interests} />
          <References referees = {this.state.referees} />
          
        </div>
        <div className='right'>
          <Work jobs= {this.state.jobs}/>
          <Education schools = {this.state.schools} />
          
        </div>
      </div>
    )
  }
}

export default App;