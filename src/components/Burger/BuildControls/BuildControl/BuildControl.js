<<<<<<< HEAD
import React from 'react'

import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>
        <button 
            className={classes.More} 
            onClick={props.added}>More</button>
    </div>
);

export default buildControl
=======
import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) => {
    return (
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
          onClick={props.removed}
          className={classes.Less}
          disabled={props.disabled}
        >
          Less
        </button>
        <button onClick={props.added} className={classes.More}>
          More
        </button>
      </div>
    );
  };
  
  export default BuildControl;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
