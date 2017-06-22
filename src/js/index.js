/* global document */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App.jsx';
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

// app init
ReactDOM.render(<App />, document.getElementById('root'));
