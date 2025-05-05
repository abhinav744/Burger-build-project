<<<<<<< HEAD
import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ( props ) => {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            } )
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger
=======
import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {
    let transformedIngredients = Object.keys(ingredients)
      .map((igKey) => {
        return [...Array(ingredients[igKey])].map((_, idx) => {
          return <BurgerIngredient key={igKey + idx} type={igKey} />;
        });
      })
      // before reduce we could have [[], [], [], []] if we pass 0 value to our ingredients
      .reduce((acc, cur) => {
        return acc.concat(cur);
      }, []);
  
    if (!transformedIngredients.length) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  };
  
  export default Burger;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
