<<<<<<< HEAD
import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
=======
import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
<<<<<<< HEAD
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'LOG IN TO ORDER'}</button>
    </div>
);

export default buildControls
=======
  ];
  
  const BuildControls = (props) => {
    return (
      <div className={classes.BuildControls}>
        <p>
          Current Price: <strong>{props.price.toFixed(2)}</strong>
        </p>
        {controls.map((control) => (
          <BuildControl
            key={control.label}
            label={control.label}
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]}
          />
        ))}
        <button
          className={classes.OrderButton}
          onClick={props.ordered}
          disabled={!props.purchaseable}
        >
          ORDER NOW
        </button>
      </div>
    );
  };
  
  export default BuildControls;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
