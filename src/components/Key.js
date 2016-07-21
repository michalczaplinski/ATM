import React, { Component, PropTypes } from 'react';

const Key = ({value, onKeypress, state}) => {

  const sendKey = () => {
    if (state == 'pin_entry' || state == 'withdraw') {
      return onKeypress(value)
    } else if (value == '') {
      return null
    }
  };

  return (
    <div className="keypad-button" onClick={sendKey}>
      {value}
    </div>
  )
};

export default Key;
