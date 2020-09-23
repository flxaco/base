import React from 'react';
import Header from './Header';
import Logo from '../../icons/flxa-coffee.svg';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Nick',
  children: <img src={Logo} className="header__logo-icon" alt="Nick" />,
};
