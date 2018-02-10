import React from 'react';

import './ValidationComponent.css';

function ValidationComponent(props) {
  return (
    <div className="text-validation">
      {props.textLength < 5 ? (
        <p className="text-validation__message  text-validation__message--error">
          Entered text too short
        </p>
      ) : (
        <p className="text-validation__message  text-validation__message--valid">
          Entered text enough
        </p>
      )}
    </div>
  );
}

export default ValidationComponent;
