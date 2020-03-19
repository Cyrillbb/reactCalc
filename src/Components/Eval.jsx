import React from 'react';

function EvalButton(props) {
    return(
        <div className={props.className} onClick={props.click}>{props.buttonValue}</div>
        )
}

export default EvalButton