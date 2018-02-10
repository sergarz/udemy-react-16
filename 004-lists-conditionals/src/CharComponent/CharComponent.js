import React from 'react';

import './CharComponent.css';

function CharComponent(props) {
  return (
    <p className="char" onClick={props.deleteChar}>
      {props.char}
    </p>
  );
}

export default CharComponent;
