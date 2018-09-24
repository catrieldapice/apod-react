import React from 'react';
import styles from './ApodContainer.css';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const ApodContainer = ({ apod }) => (
  <div className={cx('apod-container')}>
    <header>APOD API in action!</header>
    <div className={cx('apod-wrapper')}>{apod}</div>
  </div>
);

ApodContainer.propTypes = {
  apod: PropTypes.element.isRequired,
};

export default ApodContainer;
