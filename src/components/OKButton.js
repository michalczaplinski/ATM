import React, { Component, PropTypes } from 'react';

const OKButton = ({state, OKPress}) => {

  const buttonPress = () => {
    if (state == 'pin_entry') {
      return OKPress()
    } else {
      return null
    }
  };

  return (
    <div onClick={buttonPress}>
      OK
    </div>
  )
};

export default OKButton;
