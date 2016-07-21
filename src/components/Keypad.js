import React, { Component, PropTypes } from 'react';

import Key from './Key';

const Keypad = ({onKeypress, state}) => {

  return (
    <div>
      <div className="keypad-row">
        <Key state={state} value="1" onKeypress={onKeypress}/>
        <Key state={state} value="2" onKeypress={onKeypress}/>
        <Key state={state} value="3" onKeypress={onKeypress}/>

      </div>
      <div className="keypad-row">
        <Key state={state} value="4" onKeypress={onKeypress}/>
        <Key state={state} value="5" onKeypress={onKeypress}/>
        <Key state={state} value="6" onKeypress={onKeypress}/>
      </div>
      <div className="keypad-row">
        <Key state={state} value="7" onKeypress={onKeypress}/>
        <Key state={state} value="8" onKeypress={onKeypress}/>
        <Key state={state} value="9" onKeypress={onKeypress}/>
      </div>
      <div className="keypad-row">
        <Key value="" />
        <Key state={state} value="0" onKeypress={onKeypress}/>
        <Key value="" />
      </div>
    </div>
  )
};

export default Keypad
