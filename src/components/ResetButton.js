import React, { Component, PropTypes } from 'react';

const ResetButton = ({resetInput}) => {



  return (
    <div className="reset-button" onClick={resetInput}>
      RESET
    </div>
  )
};

export default ResetButton;
