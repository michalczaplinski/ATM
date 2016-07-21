import React, { Component, PropTypes } from 'react';

import { ATMstates } from '../constants';

const Key = ({value, onKeypress, state}) => {

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
