import React from 'react';

const Button = (props) => {
    return (
        <button className='button' onClick={()=>{props.handleClick()}}>Search</button>
    )
  };

export default Button;
