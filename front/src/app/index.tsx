import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss'
import logo from './images/logo.png';
import { UserCard } from './components/user-card';

ReactDOM.render(
    <ul>
        <li><img src={logo} alt="logo"/></li>
        <li><img src="" alt="users"/></li>
        <li><img src="" alt="profile"/></li>
        <li><img src="" alt="options"/></li>
        <li><img src="" alt="leave"/></li>
    </ul>
, document.getElementById('side-bar'));

ReactDOM.render(
    <div className="user-cards-wrapper">
        <UserCard _id="1" name="David Leclerc" role="Administrator"/>
        <UserCard _id="2" name="Matthieu Bocquet" role="Administrator"/>
        <UserCard _id="3" name="Sharon Dupont" role="Regular User"/>
        <UserCard _id="3" name="Lisa De Groof" role="Regular User"/>
    </div>
, document.getElementById('root'));
