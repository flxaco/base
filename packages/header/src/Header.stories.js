import React from 'react';
import Header from './Header';
import Logo from '../../icons/flxa-coffee.svg';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

const TestMenu = () => (
  <nav>
    <ul>
      <li>
        <a href="/">Hey</a>
      </li>
      <li>
        <a href="/">Ho</a>
      </li>
    </ul>
  </nav>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Nick',
  icon: <img src={Logo} className="header__logo-icon" alt="Nick" />,
  link: '/',
};

export const Menu = Template.bind({});
Menu.args = {
  name: 'Nick',
  icon: <img src={Logo} className="header__logo-icon" alt="Nick" />,
  link: '/',
  children: <TestMenu />,
};
