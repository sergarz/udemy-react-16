import React from 'react';

import classes from './CharComponent.css';

function CharComponent(props) {
  return (
    <p className={classes.char} onClick={props.deleteChar}>
      {props.char}
    </p>
  );
}

export default CharComponent;
