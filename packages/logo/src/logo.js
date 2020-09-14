import React from 'react';
import './logo.css';

const Logo = ({ name }) => (
  <div>
    <h1>
      <a className="logo" href="/">{name}</a>
    </h1>
  </div>
);

export default Logo;
