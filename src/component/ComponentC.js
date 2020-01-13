import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentC extends Component {
    render() {
        return (
            <UserConsumer >
            { (username) => {
                return (<div>
                            <h2>This is ComponentC</h2>
                            <p>This component is updated by {username} </p>
                        </div>)}}
            </UserConsumer>
        )
    }
}

export default ComponentC
