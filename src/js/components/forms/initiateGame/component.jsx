/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

export default class InitiateGameForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    const player = {
      name: this.state.name,
    };
    const timestamp = Date.now();
    this.props.onInitiation(player, timestamp);
  }

  render() {
    return (
      <div>
        <label>
          Name:
          <input name='name' onChange={this.handleInputChange} />
        </label>
        <button onClick={() => { this.handleSubmit(); }}>Initiate</button>
      </div>
    );
  }
}
