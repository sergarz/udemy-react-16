import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[UPDATE Persons.js] Inside componentWillReceiveProps()',
      nextProps,
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()');
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] Inside componentWillUpdate()',
      nextProps,
      nextState,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
  }

  render() {
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        changed={event => this.props.changed(event, person.id)}
        key={person.id}
      />
    ));
  }
}

export default Persons;
