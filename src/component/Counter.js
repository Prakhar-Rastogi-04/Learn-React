import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    incrementCount(){
        this.setState({
            count : this.state.count+1
        },
        () => console.log('count inside increment function -> ',this.state.count))
    }
    incrementCountRightlyImplemented(){
        this.setState((prevState) => ({
            count : prevState.count + 1
        }))
    }
    fiveCallsWrongWay(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }

    fiveCallsRightWay(){
        this.incrementCountRightlyImplemented();
        this.incrementCountRightlyImplemented();
        this.incrementCountRightlyImplemented();
        this.incrementCountRightlyImplemented();
        this.incrementCountRightlyImplemented();
    }
    
    render() {
        return (
            <div>
    <h1>Count is {this.state.count}</h1>
                <button onClick={() => this.fiveCallsWrongWay()}>Counter called five times - wrong way</button>
                <button onClick={() => this.fiveCallsRightWay()}>Counter called five times - right way</button>
            </div>
        )
    }
}

export default Counter
