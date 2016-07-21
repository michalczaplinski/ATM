import React, { Component, PropTypes } from 'react';

const SideButton = ({value, selectAmount}) => {

  const handleClick = () => {
    if (typeof selectAmount == 'function'){
      return selectAmount(value)
    } else {
      return null
    }
  };

  return (
    <div className="rightside-button" onClick={handleClick}>
    </div>
  )
};

export default SideButton;
