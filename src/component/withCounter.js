import React from 'react';




// accepts the original component as parameter
const withCounter = (OriginalComp , incrementBy) => {
    
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }

        increment = () => {
            this.setState( prevState => {
                return { count : prevState.count + incrementBy}
            })
        }
        
        render(){
            return <OriginalComp count={this.state.count} increment={this.increment} />
        }
    }
    // returns a new component
    return NewComponent
}

export default withCounter