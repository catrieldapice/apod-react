import React from 'react';
import './Layout.css';
import PropTypes from 'prop-types';

const Layout = ({ children, apod }) => (
  <div className={'apod-container'}>
    <header>
      <img
        className="img"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
        alt="nasa"
      />
      APOD API in action!
    </header>
    <div className={'apod-wrapper'}>{apod}</div>
    {children}
  </div>
);

Layout.propTypes = {
  apod: PropTypes.element,
  children: PropTypes.element.isRequired,
};

export default Layout;
