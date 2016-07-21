import React, { Component, PropTypes } from 'react';

const AbortButton = ({abort}) => {
  return (
    <div className="abort-button" onClick={abort}>
      ABORT
    </div>
  )
};

export default AbortButton;
