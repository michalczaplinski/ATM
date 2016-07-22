import React, { Component, PropTypes } from 'react';

import SideButton from './SideButton';

const RightSideButtons = ({selectAmount}) => {
  return (
    <div className="side-button-group">
      <SideButton value="100" selectAmount={selectAmount}/>
      <SideButton value="200" selectAmount={selectAmount}/>
      <SideButton value="gazillion" selectAmount={selectAmount}/>
    </div>
  )
};

export default RightSideButtons
