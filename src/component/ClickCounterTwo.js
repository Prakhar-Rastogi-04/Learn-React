import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    render() {
        const {count , incrementCounter} = this.props;
        return (
            <div>
                <button onClick={incrementCounter} > {count} times clicked</button>
            </div>
        )
    }
}

export default ClickCounterTwo
