<<<<<<< HEAD
import React, { Component } from 'react'

import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal
=======
import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      return (
        nextProps.show !== this.props.show ||
        nextProps.children !== this.props.children
      );
    }
  
    render() {
      return (
        <Aux>
          <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
          <div
            style={{
              transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: this.props.show ? 1 : 0,
            }}
            className={classes.Modal}
          >
            {this.props.children}
          </div>
        </Aux>
      );
    }
  }
  
  export default Modal;
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
