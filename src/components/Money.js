import React, { Component, PropTypes } from 'react';

const Money = ({cash, takeMoney}) => {

  return (
    <div className="money-button" onClick={takeMoney}>
      <span className="blink"> {cash} </span>
    </div>
  )
};

export default Money;
