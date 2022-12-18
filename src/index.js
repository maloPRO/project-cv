import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonalInfo from './components/personal';
import './styles/index.css';
import Contacts from './components/contacts';
import Interests from './components/interests';

const user = {
  name: 'Gilbert Malova',
  title: 'Software Developer',
}

const contacts = {
  tel: '+254 792 184 923',
  email: 'malovagilbert@gmail.com',
  address: 'Eldoret, Kenya',
}

const interests = ['Coding', 'Reading', 'Playing Chess', 'Hiking'];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='left'>
      <PersonalInfo user = {user}/>
      <Contacts contacts = {contacts} />
      <Interests interests = {interests} />
    </div>
    <div className='right'>
    </div>
  </React.StrictMode>
);


