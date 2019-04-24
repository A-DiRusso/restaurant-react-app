import React from 'react';

function Input(props) {
    return (
        <div className="Restaurants">
          <input
            onChange={props.handleInput}
            />
        </div>
    )
}

export default Input;