import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({ name, icon, link, children }) => (
  <header data-testid="header-test">
    <div className="wrapper">
      <div>
        {icon}
        <h1>
          <a href={link}>
            {name}
          </a>
        </h1>
      </div>
      <div>
        {children}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node,
  link: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  icon: null,
  link: '/',
  children: null,
};

export default Header;
