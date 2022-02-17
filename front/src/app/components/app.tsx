import * as React from 'react'
import { SideBar } from './side-bar'
import { Content } from './content'

export class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <SideBar />
                <Content />
            </div>
        )
    }
}