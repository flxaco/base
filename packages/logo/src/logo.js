import React from 'react';
import PropTypes from 'prop-types';
import './logo.css';

const Logo = ({ name }) => (
  <div>
    <h1>
      <a className="logo" href="/">{name}</a>
    </h1>
  </div>
);

Logo.propTypes = {
  name: PropTypes.string,
};

Logo.defaultProps = {
  name: 'Logo',
};

export default Logo;
