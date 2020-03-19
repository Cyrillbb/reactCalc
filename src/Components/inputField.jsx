import React, { Component } from 'react';

function InputField(props) {
    return(
    <div className={props.className}>{props.enteredInput}{props.enteredOp}{props.enteredIn2}</div>
    )
}

export default InputField