import React from 'react';
import Column from './Column';

function Fragment() {
    return (
        <React.Fragment>
        {/* We can also use <></> for the same purpose */}
            <h2>React Fragments</h2>
            <p>The fragment removes the wrapper of the component from the DOM inorder to remove the additional tags.
                Debug this code to check that.
            </p>
            <table>
                <tbody>
                    <tr>
                        <Column />
                    </tr>
                </tbody>
            </table>
            </React.Fragment>
    )
}

export default Fragment
