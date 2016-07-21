import React, { Component, PropTypes } from 'react';

import { states } from '../constants';

const Key = ({value, onKeypress, state}) => {

  const sendKey = () => {
    if (state == states.pin_entry || state == states.select_amount) {
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
