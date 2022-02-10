import * as React from 'react'
import { IUserProps } from '../interfaces/IUserProps'
  
export class UserCard extends React.Component<IUserProps, {}> {
  render() {
    return <div id={this.props._id} className="user-card">  
      <h1>{this.props.name}</h1>
      
      <h2>{this.props.role}</h2>
    </div>

      
  }
}