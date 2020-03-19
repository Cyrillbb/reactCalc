import React from 'react';

function Button(props) {
    return(
    <div className={props.className} onClick={() => {
        return props.click(props.buttonValue)
    }}>{props.buttonValue}</div>
    )
}

export default Button;
