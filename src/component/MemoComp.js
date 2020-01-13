import React from 'react'

function MemoComp({name}) {
    console.log('renering moemo comp')
    return (
        <div>
            This memo comp is created by {name}
        </div>
    )
}

export default React.memo(MemoComp) 
