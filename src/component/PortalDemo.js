import React from 'react';
import ReactDOM from 'react-dom';

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            <h1>This is a portal</h1>
        </div> ,
        document.getElementById('portal-demo')
       ) 
}

export default PortalDemo
