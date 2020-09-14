import React from 'react';
import PACKAGE_NAME from './PACKAGE_NAME';

export default {
  title: 'Components/PACKAGE_NAME',
  component: PACKAGE_NAME,
};

const Template = args => <PACKAGE_NAME {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Example text',
};
