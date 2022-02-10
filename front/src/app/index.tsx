import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.scss'
import { UserCard } from './components/user-card';
 
ReactDOM.render(<UserCard _id="1" name="Robert" />, document.getElementById('root'));