import React from 'react'

function Column() {
    return (
        // <div> -- if we use div we'll se an error on console saying that <td> can not be nested inside div. Thus using fragment here.
            <>
                <td>Name</td>
                <td>Age</td>
            </>
        // </div>
    )
}

export default Column
