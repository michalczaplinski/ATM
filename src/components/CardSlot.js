import React, { Component, PropTypes } from 'react';

const CardSlot = ({slotText, insertCard, state}) => {

  const handleClick = () => {
    if (state == 'initial') {
      return insertCard()
    } else {
      return null
    }
  };

  return (
    <div className="cardslot" onClick={handleClick}>
      {slotText}
    </div>
  );
};

export default CardSlot
