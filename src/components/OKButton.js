import React, { Component, PropTypes } from 'react';

const OKButton = ({pressConfirm}) => {

  return (
    <div className="ok-button" onClick={pressConfirm}>
      OK
    </div>
  )
};

export default OKButton;
