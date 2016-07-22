import React, { Component, PropTypes } from 'react';

import { ATMstates } from '../constants';

const Key = ({value, onKeypress, state}) => {

  // respond to the keypress only if the ATM is in one of the states that allows user input.
  const sendKey = () => {
    if (state == ATMstates.pin_entry || state == ATMstates.select_amount) {
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
