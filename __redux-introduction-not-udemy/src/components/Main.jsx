import React, { Component } from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeFirstName, changeSecondName } from '../store/actions';

class MainComponent extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName,
    } = this.props;

    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.firstName}
            placeholder="first name"
            onChange={event => {
              changeFirstName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={this.props.secondName}
            placeholder="second name"
            onChange={event => {
              changeSecondName(event.target.value);
            }}
          />
        </div>

        <div>{`${firstName} ${secondName}`}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    secondName: state.secondName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
