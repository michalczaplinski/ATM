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
    <div className="side-button" onClick={handleClick}>
    </div>
  )
};

export default SideButton;
