<<<<<<< HEAD
import React from 'react'

import classes from './Button.css'

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button
=======
import React from 'react';
import classes from './Button.css';

const Button = (props) => {
    return (
      <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    );
  };
  
  export default Button;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
