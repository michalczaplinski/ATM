import React, { Component, PropTypes } from 'react';

const BackButton = ({goBack}) => {
  return (
    <div className="back-button" onClick={goBack}>
      BACK
    </div>
  )
};

export default BackButton;
