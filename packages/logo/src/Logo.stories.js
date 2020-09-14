import React from 'react';

import Logo from './logo';

export default {
  title: 'Example/Logo',
  component: Logo,
};

const Template = () => (
  <Logo name="Nick Fletcher" />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Logo',
};
