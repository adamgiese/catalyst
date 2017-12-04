/* eslint-disable no-unused-vars */
import React from 'react';
import InitiateGameForm from './forms/initiateGame/container.jsx';
/* eslint-ensable no-unused-vars */

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hola, mundo!',
    };
  }

  render() {
    return (
      <div className='app'>
        <h1 className='app-title'>{this.state.message}</h1>
        <InitiateGameForm />
      </div>
    );
  }
}
