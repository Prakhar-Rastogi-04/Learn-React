import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'
import MemoComp from './MemoComp'

 class Master extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'Prakhar'
         }
     }
     componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'Prakhar'
             })
        }, 2000)
     }
     
    render() {
        console.log('master comp----------------------')
        return (
            <div>
                This is Master Component
                {/* <PureComp /> */}
                {/* <RegularComponent /> */}
                 <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default Master
