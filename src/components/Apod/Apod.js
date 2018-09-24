import React from 'react';
import './Apod.css';
import PropTypes from 'prop-types';

const Apod = ({ url, explanation, title }) => (
  <div className={'apod'}>
    <img onClick={() => window.open(url)} src={url} alt="space" />
    <h2> {title} </h2>
    <p> {explanation} </p>
  </div>
);

Apod.propTypes = {
  url: PropTypes.string,
  explanation: PropTypes.string,
};

export default Apod;
