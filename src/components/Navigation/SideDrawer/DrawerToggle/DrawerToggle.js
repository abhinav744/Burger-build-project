import React from 'react';
<<<<<<< HEAD

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;
=======
import classes from './DrawerToggle.css';

const DrawerToggle = (props) => {
    return (
      <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };
  
  export default DrawerToggle;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
