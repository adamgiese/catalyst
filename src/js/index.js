/* global document, window */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import App from './components/App.jsx';
import reducer from './services/rootReducer';
/* eslint-ensable no-unused-vars */

// styling
require('./../scss/styles.scss');

WebFont.load({
  google: {
    families: ['Lato'],
  },
});

// polyfill for older browswers
require('es6-promise').polyfill();

/* eslint-disable no-underscore-dangle */
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  reducer,
  initialState,
  reduxDevTools,
);
/* eslint-enable */

// app init
ReactDOM.render(<App />, document.getElementById('root'));
