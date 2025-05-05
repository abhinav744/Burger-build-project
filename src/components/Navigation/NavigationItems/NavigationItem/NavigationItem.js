<<<<<<< HEAD
import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.css'

const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem
=======
import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './NavigationItem.css';

const NavigationItem = (props) => {
    return (
      <li className={classes.NavigationItem}>
        <NavLink
          to={props.link}
          exact={props.exact}
          activeClassName={classes.active}
        >
          {props.children}
        </NavLink>
      </li>
    );
  };
  
  export default NavigationItem;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
