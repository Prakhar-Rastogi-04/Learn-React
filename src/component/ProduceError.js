import React from 'react'

function ProduceError({name}) {
    if(name === 'ABCD'){
        throw new Error('Not a user!')
    }
    return (
        <div>
            user is {name}
        </div>
    )
}

export default ProduceError
