import React from 'react'

// function InputFRRefs() {
//     return (
//         <div>
//             <label>Frowading refs: </label>
//             <input type="text"  />
//         </div>
//     )
// }

const InputFRRefs = React.forwardRef(
    (props, ref) => {
        return (
                    <div>
                        <label>Frowading refs: </label>
                        <input type="text" ref={ref} />
                    </div>
                )
    }
) 


export default InputFRRefs
