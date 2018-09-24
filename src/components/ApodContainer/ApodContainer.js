import React from 'react';
import './ApodContainer.css';
import PropTypes from 'prop-types';

const ApodContainer = ({ apod }) => (
  <div className={'apod-container'}>
    <header>APOD API in action!</header>
    <div className={'apod-wrapper'}>{apod}</div>
  </div>
);

ApodContainer.propTypes = {
  apod: PropTypes.element.isRequired,
};

export default ApodContainer;
