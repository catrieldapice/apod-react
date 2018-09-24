import React from 'react';
import styles from './Apod.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Apod = ({ url, explanation }) => (
  <div className={cx('apod')}>
    <img onClick={() => window.open(url)} src={url} alt="space" />
    <p> {explanation} </p>
  </div>
);

Apod.propTypes = {
  url: PropTypes.string,
  explanation: PropTypes.string,
};

export default Apod;
