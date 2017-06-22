import React from 'react';

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
      </div>
    );
  }
}
