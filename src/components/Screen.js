import React, { Component, PropTypes } from 'react';

const Screen = ({text, input, state}) => {

  const userInput = () => {
    if (state == 'pin_entry') {
      return '*'.repeat(input.length);
    } else {
      return input
    }
  };

  return (
    <div className="screen">
      <div>{text}</div>
      <div>{userInput()}</div>
    </div>
  )
};

export default Screen;
