import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonalInfo from './components/personal';
import './styles/index.css';
import Contacts from './components/contacts';
import Interests from './components/interests';
import References from './components/references';
import uniqid from 'uniqid';

const user = {
  name: 'Gilbert Malova',
  title: 'Software Developer',
}

const contacts = {
  tel: '+254 792 184 923',
  email: 'malovagilbert@gmail.com',
  address: 'Eldoret, Kenya',
}

const interests = [
  {
    name: 'Chess',
    id: uniqid()
  },
  {
    name: 'Coding',
    id: uniqid()
  },
  {
    name: 'Reading Novels',
    id: uniqid()
  }
];

const referees = [
  {
    title: 'Mr.',
    names: 'Mate Boniface',
    org: 'Childrens Transformation Project',
    phone: '+254 719 875 689',
    mail: 'mateboniface@gmail.com',
    id: uniqid()
  },
  {
    title: 'Mrs.',
    names: 'Lynett Odida',
    org: 'Ministry of Labor',
    phone: '+254 727 948 443',
    mail: 'lodida78@yahoo.com',
    id: uniqid()
  },
  {
    title: 'Mr.',
    names: 'Byrum Charles',
    org: 'Cubahiro International School',
    phone: '+257 435 553 432',
    mail: 'byrumcharles@gmail.com',
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
    </div>
  </React.StrictMode>
);


