import React, { Component, PropTypes } from 'react';

const Screen = ({text, input, showChoices}) => {

  let cashChoices = showChoices
    ? <div>
        <div>10 €</div>
        <div>20 €</div>
        <div>50 €</div>
        <div>100 €</div>
        <div>200 €</div>
        <div>gazyllion €</div>
      </div>
    : '';

  return (
    <div className="screen">
      <div>{text}</div>
      <div>{input}</div>
      {cashChoices}
    </div>
  )
};

export default Screen;
