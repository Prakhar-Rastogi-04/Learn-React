import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Old Msg'
        }

        this.clickHandler4 = this.clickHandler4.bind(this)
    }
    
    clickHandler1(){
        console.log('handler called');
    }
    clickHandler2(){
        console.log('handler2 called')
        this.setState({
            message : 'New Msg'
        })
    }
    clickHandler3(){
        console.log('handler3 called')
        this.setState({
            message : 'New Msg'
        })
    }
    clickHandler4(){
        console.log('handler4 called')
        this.setState({
            message : 'New Msg'
        })
    }

    clickHandler5 = () => {
        console.log('handler5 called')
        this.setState({
            message : 'New Msg'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <div><button onClick={this.clickHandler1}>Click-1</button></div>
                <div><button onClick={this.clickHandler2.bind(this)}>Click-2</button></div>
                <div><button onClick={() => this.clickHandler3()}>Click-3</button></div>
                <div><button onClick={this.clickHandler4}>Click-4</button></div>
                <div><button onClick={this.clickHandler5}>Click-5</button></div>
            </div>
        )
    }
}

export default EventBind
