import React, { Component, PropTypes } from 'react';

const CancelButton = ({cancel}) => {
  return (
    <div className="cancel-button" onClick={cancel}>
      ABORT
    </div>
  )
};

export default CancelButton;
