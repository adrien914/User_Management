import * as React from 'react'
import { IUserProps } from '../interfaces/IUserProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faUser, faGear, faArrowRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.png';

export class SideBar extends React.Component {
    render() {
        return (
            <nav className="side-bar">
                <ul>
                    <li><img className="logo" src={logo} alt="logo" /></li>
                    <li><FontAwesomeIcon icon={faUserGroup} /></li>
                    <li><FontAwesomeIcon icon={faUser} /></li>
                    <li><FontAwesomeIcon icon={faGear} /></li>
                    <li><FontAwesomeIcon icon={faArrowRightFromBracket} /></li>
                </ul>
            </nav>

        )

    }
}