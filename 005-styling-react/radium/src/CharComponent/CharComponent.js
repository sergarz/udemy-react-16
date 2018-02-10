import React from 'react';
import Radium from 'radium';

import './CharComponent.css';

function CharComponent(props) {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px',
    },
  };

  return (
    <p className="char" style={style} onClick={props.deleteChar}>
      {props.char}
    </p>
  );
}

export default Radium(CharComponent);
