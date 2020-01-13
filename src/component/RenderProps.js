import React, { Component } from 'react'

class RenderProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    incementCounter = ()=>{
        this.setState(prevState =>{return {count: prevState.count+1}})
    }
    
    render() {
        return (
            <div>
                {this.props.render(this.state.count , this.incementCounter)}
            </div>
        )
    }
}

export default RenderProps
