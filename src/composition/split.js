import React from 'react';
import './split.css';

function Split(props) {
    const combinedClassName = `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
        <div className={combinedClassName} style={newStyles}>
            {props.children}
        </div>
    );
}

export default Split;