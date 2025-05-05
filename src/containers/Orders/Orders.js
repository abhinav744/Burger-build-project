<<<<<<< HEAD
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class Orders extends Component {

    componentDidMount() {
       this.props.onFetchOrders(this.props.token, this.props.userId)
    }

    render () {
        let orders = <Spinner />
        if ( !this.props.loading ) {
            orders = this.props.orders.map( order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
        }
        return (
            <div>
                { orders }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))
=======
import React, { Component } from 'react';
import Order from '../../components/Order/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

export class Orders extends Component {
    state = {
      orders: [],
      loading: true,
    };
  
    componentDidMount() {
      axios
        .get('/orders.json')
        .then(({ data }) => {
          this.setState({ loading: false });
          const fetchedOrders = [];
          for (const key in data) {
            fetchedOrders.push({ ...data[key], id: key });
          }
          this.setState({ orders: fetchedOrders });
        })
        .catch((error) => {
          this.setState({ loading: false });
        });
    }
  
    render() {
      return (
        <div>
          {this.state.orders.map((order) => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          ))}
        </div>
      );
    }
  }
  
  export default withErrorHandler(Orders, axios);
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
