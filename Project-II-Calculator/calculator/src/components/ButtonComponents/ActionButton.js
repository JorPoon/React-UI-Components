import React from 'react';
import './Button.css';


const ActionButton = props => {
    console.log(props);
    return  <button className={props.className}>{props.text}</button>
}

export default ActionButton;