import React from 'react';
import GrandChild from './GrandChild';

const Child = (props) => 
{

    return(
    <h2>This is {props.name}</h2>
        <GrandChild />
    )
}

export default Child;