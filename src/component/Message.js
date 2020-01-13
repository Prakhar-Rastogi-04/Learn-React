import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : 'This is static text'
        }
    }
    btnClick(){
        console.log('btn clicked')
        this.setState ({
            message : 'Changes saved!!'
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.btnClick()}>Save</button>
            </div>
        )
    }
}

export default Message