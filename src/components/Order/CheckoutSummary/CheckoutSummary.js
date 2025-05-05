<<<<<<< HEAD
import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes great!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;
=======
import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{ width: '100%', margin: 'auto' }}>
          <Burger ingredients={props.ingredients} />
        </div>
        <Button clicked={props.checkoutCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={props.checkoutContinued} btnType="Success">
          CONTINUE
        </Button>
      </div>
    );
  };
  
  export default CheckoutSummary;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
