import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        const {count, incrementCounter} = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCounter} >This heading is hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCounterTwo
