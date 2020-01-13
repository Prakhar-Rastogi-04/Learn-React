import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick = {props.parentHandler}>Button inside Child</button>
            <br />
            <button onClick = {() => props.parentHandlerWithParam('child')}>Button inside Child passes a parameter</button>
        </div>
    )
}

export default Child
