
import React, { Component } from 'react'
import LifecycleB  from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'A'
        }
        console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                LifeCycleA
                <LifecycleB />
            </div>
        )
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount ')
    }
}

export default LifecycleA
