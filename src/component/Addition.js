import React, { Component } from 'react';
import  withCounter from './withCounter';

class Addition extends Component {
    render() {
        const {count , increment} = this.props;
        return (
            <div>
                <button onClick={increment}>Incremented {count} times</button>
            </div>
        )
    }
}

export default withCounter(Addition,10)
