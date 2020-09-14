import React from 'react';
import PropTypes from 'prop-types';
import './PACKAGE_NAME.css';

const PACKAGE_NAME = ({ text }) => (
  <div>{ text }</div>
);

PACKAGE_NAME.propTypes = {
  text: PropTypes.string,
};

PACKAGE_NAME.defaultProps = {
  text: 'Example text',
};

export default PACKAGE_NAME;
