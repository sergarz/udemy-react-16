import React from 'react';

function UserInput(props) {
  const labelStyles = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold',
  };

  const inputStyles = {
    display: 'block',
    width: '30%',
    padding: '5px',
    margin: '0 auto',
    fontSize: '18px',
  };

  return (
    <div>
      <label htmlFor="user-name" style={labelStyles}>
        User Name:
      </label>
      <input
        id="user-name"
        type="text"
        value={props.userName}
        onChange={props.change}
        style={inputStyles}
      />
    </div>
  );
}

export default UserInput;
