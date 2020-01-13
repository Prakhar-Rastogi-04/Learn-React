
import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'A'
        }
        console.log('LifeCycleB constructor')
    }
    
    static getDerivedStateFromProps(){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleBLifeCycleB
            </div>
        )
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount ')
    }
}

export default LifeCycleB

