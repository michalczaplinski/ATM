import React, { Component, PropTypes } from 'react';

const CardSlot = ({slotText, useCard}) => {

  return (
    <div className="cardslot" onClick={useCard}>
      <span className="blink"><strong>{slotText}</strong></span>
    </div>
  );
};

export default CardSlot
