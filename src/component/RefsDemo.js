import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
    this.inputRef = React.createRef();
    this.callbackRef = null;
    this.setCallbackRefs = element => {
        this.callbackRef = element
        } 
    }

    componentDidMount(){
        // console.log(this.inputRef);
        // this.inputRef.current.focus()
        if(this.callbackRef){
            this.callbackRef.focus();
        }
    }

    clickHandler=()=>{
        console.log(this.inputRef)
        alert( this.inputRef.current.value)
    }

    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCallbackRefs} />
                <button onClick={this.clickHandler} >Click</button>
            </div>
        )
    }
}

export default RefsDemo
