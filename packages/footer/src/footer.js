import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ copyright }) => (
  <section className="footer" data-testid="footer-test">
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
