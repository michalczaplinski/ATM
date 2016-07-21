import React, { Component, PropTypes } from 'react';

import SideButton from './SideButton';

const LeftSideButtons = ({selectAmount}) => {
  return (
    <div>
      <SideButton value="10" selectAmount={selectAmount}/>
      <SideButton value="20" selectAmount={selectAmount}/>
      <SideButton value="50" selectAmount={selectAmount}/>
    </div>
  )

};

export default LeftSideButtons;
