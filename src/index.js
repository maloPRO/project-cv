import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonalInfo from './components/personal';
import './styles/index.css';
import Contacts from './components/contacts';
import Interests from './components/interests';
import References from './components/references';
import uniqid from 'uniqid';
import Work from './components/workExp';
import Education from './components/education';
import Skills from './components/skills';

const user = {
  name: 'Your Name',
  title: 'Job Title',
}

const contacts = {
  tel: '+1 234 567 890',
  email: 'example@email.com',
  address: 'City, Country',
}

const interests = [
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
];

const referees = [
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
    names: ' Name Surname',
    org: 'Organization',
    phone: '+1 234 567 890',
    mail: 'example@email.com',
    id: uniqid()
  },
  {
    title: 'Mr/Mrs.',
    names: ' Name Surname',
    org: 'Organization',
    phone: '+1 234 567 890',
    mail: 'example@email.com',
    id: uniqid()
  }
]
const jobs = [
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
  },
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
  },
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
  }
]

const schools = [
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
]
const skills = [
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
  },
  {
    name: 'Skill 4',
    id: uniqid()
  },
  {
    name: 'Skill 5',
    id: uniqid()
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='left'>
      <PersonalInfo user = {user}/>
      <Contacts contacts = {contacts} />
      <Interests interests = {interests} />
      <References referees = {referees} />
    </div>
    <div className='right'>
      <Work jobs= {jobs}/>
      <Education schools = {schools} />
      <Skills skills = {skills} />
    </div>
  </React.StrictMode>
);


