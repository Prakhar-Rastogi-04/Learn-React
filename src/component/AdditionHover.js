import React, { Component } from 'react';
import withCounter from './withCounter';


class AdditionHover extends Component {

    render() {
        const {count , increment} = this.props;
        return (
            <div>
                <h2 onMouseOver={increment} >Incremented {count} times</h2>
            </div>
        )
    }
}

export default withCounter(AdditionHover,20)
