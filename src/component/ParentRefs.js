import React, { Component } from 'react'
import InputFRRefs from './InputFRRefs'
class ParentRefs extends Component {
    constructor(props) {
        super(props)
    
        this.inputRefs = React.createRef();
    }

    focusElement(){
        this.inputRefs.current.focus();
    }
    
    render() {
        return (
            <div>
               <InputFRRefs ref={this.inputRefs} /> 
               <button onClick={this.focusElement.bind(this)}>Focus</button>
            </div>
        )
    }
}

export default ParentRefs
