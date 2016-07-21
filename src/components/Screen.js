import React, { Component, PropTypes } from 'react';

const Screen = ({text, input, showChoices}) => {

  let cashChoices = showChoices
    ? <div className="choices-container">
        <div className="left-choices">
          <div className="choice">10 €</div>
          <div className="choice">20 €</div>
          <div className="choice">50 €</div>
        </div>
        <div className="right-choices">
          <div className="choice">100 €</div>
          <div className="choice">200 €</div>
          <div className="choice">gazyllion €</div>
        </div>
      </div>
    : '';

  return (
    <div className="screen">
      <div className="info-text">
        <span>{text}</span>
      </div>
      <div className="input">{input}</div>
      {cashChoices}
    </div>
  )
};

export default Screen;
