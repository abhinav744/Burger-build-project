<<<<<<< HEAD
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './BurgerIngredient.css'

class BurgerIngredient extends Component {
    render () {
        let ingredient = null

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                )
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}></div>
                break;
            case ( 'cheese' ):
                ingredient = <div className={classes.Cheese}></div>
                break;
            case ( 'bacon' ):
                ingredient = <div className={classes.Bacon}></div>
                break;
            case ( 'salad' ):
                ingredient = <div className={classes.Salad}></div>
                break
            default:
                ingredient = null
        }

        return ingredient
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient
=======
import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

const BurgerIngredient = (props) => {
    let ingredient = null;
  
    switch (props.type) {
      case 'bread-bottom':
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case 'bread-top':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={classes.Meat}></div>;
        break;
      case 'cheese':
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case 'salad':
        ingredient = <div className={classes.Salad}></div>;
        break;
      case 'bacon':
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = null;
        break;
    }
    return ingredient;
  };
  
  BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
  };
  
  export default BurgerIngredient;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
