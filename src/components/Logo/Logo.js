<<<<<<< HEAD
import React from 'react'

import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo
=======
import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => {
    return (
      <div className={classes.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt="MyBurger" />
      </div>
    );
  };
  
  export default Logo;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
