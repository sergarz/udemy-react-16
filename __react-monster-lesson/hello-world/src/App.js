import React, { Component } from 'react';
import Menu from './Menu';

class App extends Component {
  submit = () => {
    console.log('submit', this.testInput.value);
  };

  render() {
    return (
      <div>
        <Menu />
        <input
          type="text"
          placeholder="test"
          ref={input => (this.testInput = input)}
        />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default App;
