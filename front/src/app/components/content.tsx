import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { UserCard } from './user-card';

export class Content extends React.Component {
    render() {
        let users = [
            {_id: "1", name: "David Leclerc", role: "Administrator"},
            {_id: "2", name: "Matthieu Bocquet", role: "Administrator"},
            {_id: "3", name: "Sharon Dupont", role: "Regular User"},
            {_id: "4", name: "Lisa De Groof", role: "Regular User"},
            {_id: "4", name: "Lisa De Groof", role: "Regular User"},
        ]
        return (
            <div className='content'>
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
        )

    }
}