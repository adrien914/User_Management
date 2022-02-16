import * as React from 'react'
import { IUserProps } from '../interfaces/IUserProps'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

export class UserCard extends React.Component<IUserProps, {}> {
  render() {
    return <div id={this.props._id} className="user-card">  
      <h1>{this.props.name}</h1>
      <h2>{this.props.role}</h2>
      <FontAwesomeIcon className='user-arrow' icon={faCircleArrowRight} />
    </div>

      
  }
}