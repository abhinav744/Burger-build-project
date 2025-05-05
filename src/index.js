<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'


import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import burgerBuilderReducer from './store/reducers/burgerBuilder'
import orderReducer from './store/reducers/order'
import authReducer from './store/reducers/auth'
import { watchAuth, watchBurgerBuilder, watchOrder } from './store/sagas'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
))

sagaMiddleware.run(watchAuth)
sagaMiddleware.run(watchBurgerBuilder)
sagaMiddleware.run(watchOrder)

const app = (
    <Provider store={store}>
        <BrowserRouter basename='max-hamburger'>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render( app, document.getElementById( 'root' ) )
registerServiceWorker();
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  ReactDOM.render(app, document.getElementById('root'));
  registerServiceWorker();
  
>>>>>>> 4f7dadc808d3ec1381f66a5e6eee3a17d90c5358
