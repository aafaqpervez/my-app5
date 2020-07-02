import React from 'react';

const GrandChild = (props) => {
    return (
        <div>
            <h2>This is our GrandChild</h2>
            <h3>This is {props.name}</h3>
        </div>
    )
}

export default GrandChild;

