import React, { Component } from 'react';

class RegistrationFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('form is submitted. Email value is', this.state.email);
  };

  handleEmailChange = event => {
    console.log('email was change', this);
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeheolder="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default RegistrationFrom;
