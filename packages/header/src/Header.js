import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../icons/flxa-coffee.svg';
import './header.css';

const Header = ({ name }) => (
  <header data-testid="header-test">
    <div className="wrapper">
      <div>
        <img src={Logo} className="header__logo-icon" alt={name} />
        <h1>{name}</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
