import React, { Component } from 'react';

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: false };
  }

  toggleState = () => {
    this.setState(state => ({ isOpened: !state.isOpened }));
  };

  render() {
    console.log('isOpened: ', this.state.isOpened);

    let dropDownText;

    if (this.state.isOpened) {
      dropDownText = <div>Here is what is shown in dropdown</div>;
    }

    return (
      <div onClick={this.toggleState}>It's dropdown baby {dropDownText} </div>
    );
  }
}

export default DropDown;
