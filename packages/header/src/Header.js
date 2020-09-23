import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ name, children }) => (
  <header data-testid="header-test">
    <div className="wrapper">
      <div>
        {children}
        <h1>{name}</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
