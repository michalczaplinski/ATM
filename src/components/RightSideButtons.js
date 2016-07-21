import React, { Component, PropTypes } from 'react';

import SideButton from './SideButton';

const RightSideButtons = ({selectAmount}) => {
  return (
    <div>
      <SideButton value="100" selectAmount={selectAmount}/>
      <SideButton value="200" selectAmount={selectAmount}/>
      <SideButton value="gazyllion" selectAmount={selectAmount}/>
    </div>
  )
};

export default RightSideButtons
