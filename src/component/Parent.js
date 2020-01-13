import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    parentHandler(){
        alert('Hello')
    }
    parentHandlerWithParam(val){
        alert(`Hello ${val}`)
    }
    render() {
        return (
            <div>
                <Child parentHandler = {this.parentHandler} parentHandlerWithParam={this.parentHandlerWithParam} />
            </div>
        )
    }
}

export default Parent
