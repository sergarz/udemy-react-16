import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputText: '',
  };

  handleChangeInput = event => this.setState({ inputText: event.target.value });

  handleDeleteChar = index => {
    const inputText = this.state.inputText
      .split('')
      .filter((char, idx) => idx !== index)
      .join('');
    console.log(inputText);
    this.setState({ inputText });
  };

  render() {
    return (
      <div className="App">
        <div className="input-text">
          <label className="input-text__label" htmlFor="input-text">
            Enter text:
          </label>
          <input
            type="text"
            className="input-text__input"
            id="input-text"
            value={this.state.inputText}
            onChange={this.handleChangeInput}
          />
          <ValidationComponent textLength={this.state.inputText.length} />
          <p>Entered text length: {this.state.inputText.length}</p>
        </div>
        <div>
          {this.state.inputText.length > 0
            ? this.state.inputText
                .split('')
                .map((char, index) => (
                  <CharComponent
                    char={char}
                    key={index}
                    index={index}
                    deleteChar={() => this.handleDeleteChar(index)}
                  />
                ))
            : null}
        </div>
      </div>
    );
  }
}

export default App;
