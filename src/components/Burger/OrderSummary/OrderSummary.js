<<<<<<< HEAD
import React, { Component } from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {    

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> )
            } )

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary
=======
import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    // componentDidUpdate() {
    //   // TODO: remove, only debug purpose
    //   console.log('[OrderSummary] componentDidUpdate');
    // }
  
    render() {
      const {
        price,
        ingredients,
        purchaseCanceled,
        purchaseContinued,
      } = this.props;
      const ingredientSummary = Object.keys(ingredients).map((igKey, idx) => {
        return (
          <li key={igKey + idx}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {ingredients[igKey]}
          </li>
        );
      });
      return (
        <Aux>
          <h3>Your Order</h3>
          <p>Delicious burger with the following ingredients: </p>
          <ul>{ingredientSummary}</ul>
          <p>
            Total price: <strong>{price.toFixed(2)}</strong>
          </p>
          <p>Continue to Checkout</p>
          <Button btnType="Danger" clicked={purchaseCanceled}>
            CANCEL
          </Button>
          <Button btnType="Success" clicked={purchaseContinued}>
            CONTINUE
          </Button>
        </Aux>
      );
    }
  }
  
  export default OrderSummary;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
