import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ copyright }) => (
  <section className="footer">
    &copy;
    {' '}
    {copyright}
  </section>
);

Footer.propTypes = {
  copyright: PropTypes.string,
};

Footer.defaultProps = {
  copyright: '',
};

export default Footer;
