import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonalInfo from './components/personal';
import './styles/index.css';
import Contacts from './components/contacts';
import Interests from './components/interests';
import References from './components/references';
import uniqid from 'uniqid';
import Work from './components/workExp';

const user = {
  name: 'Your Name',
  title: 'Job Title',
}

const contacts = {
  tel: '+254 797 177 923',
  email: 'johnsnow@yahoo.com',
  address: 'Winterfel, The North',
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
    title: 'Mr.',
    names: 'Fred Johnson',
    org: 'Tycho station, the Belt',
    phone: '+2 719 844 547',
    mail: 'fredjohnson.tycho.belt',
    id: uniqid()
  },
  {
    title: 'Mr.',
    names: 'Clark Kent',
    org: 'Daily Planet',
    phone: '+1 727 945 774',
    mail: 'notSuperman@krypton.com',
    id: uniqid()
  },
  {
    title: 'Mr.',
    names: 'Wirriam Luto',
    org: 'Husla Incorporated',
    phone: '+257 498 553 441',
    mail: 'nabii@.go.ke',
    id: uniqid()
  }
]
const jobs = [
  { 
    id: uniqid(),
    title: 'Job Title',
    org: 'Organization',
    startDate: 'Month Year',
    endDate: 'Month Year',
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
  },
  { 
    id: uniqid(),
    title: 'Job Title',
    org: 'Organization',
    startDate: 'Month Year',
    endDate: 'Month Year',
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
  },
  { 
    id: uniqid(),
    title: 'Job Title',
    org: 'Organization',
    startDate: 'Month Year',
    endDate: 'Month Year',
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
    </div>
  </React.StrictMode>
);


