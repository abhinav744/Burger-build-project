<<<<<<< HEAD
import React from 'react'

import classes from './Backdrop.css'

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
)

export default backdrop
=======
import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
    return props.show ? (
      <div className={classes.Backdrop} onClick={props.clicked}></div>
    ) : null;
  };
  
  export default Backdrop;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
