import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserGroup, faUser, faGear, faArrowRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles/index.scss'
import logo from './images/logo.png';
import { UserCard } from './components/user-card';

ReactDOM.render(
    <ul>
        <li><img className="logo" src={logo} alt="logo"/></li>
        <li><FontAwesomeIcon icon={faUserGroup} /></li>
        <li><FontAwesomeIcon icon={faUser} /></li>
        <li><FontAwesomeIcon icon={faGear} /></li>
        <li><FontAwesomeIcon icon={faArrowRightFromBracket} /></li>
    </ul>
, document.getElementById('side-bar'));

// call api
let users = [
    {_id: "1", name: "David Leclerc", role: "Administrator"},
    {_id: "2", name: "Matthieu Bocquet", role: "Administrator"},
    {_id: "3", name: "Sharon Dupont", role: "Regular User"},
    {_id: "4", name: "Lisa De Groof", role: "Regular User"},
    {_id: "4", name: "Lisa De Groof", role: "Regular User"},
]
ReactDOM.render(
    <div>
        <h1>Our Users</h1>
        <div className='top-buttons'>
            <span className="user-search-wrapper">
                <input id="user-search" placeholder='Search for a new user' type="text" />
                <FontAwesomeIcon className="search-user-icon" icon={faSearch} />
            </span>
            <button id="add-user-button"><FontAwesomeIcon className="new-user-icon" icon={faPlus} />add new user</button>
        </div>
        <div className="user-cards-wrapper">
            {users.map((user)=>{
                return <UserCard _id={user._id} name={user.name} role={user.role}/>
            })}
        </div>
    </div>
, document.getElementById('root'));
