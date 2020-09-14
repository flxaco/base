import React from 'react';

import Footer from './footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = args => <Footer copyright="2020 Nick Fletcher. All rights reserved." {...args} />;

export const Default = Template.bind({});
Default.args = {
  copyright: 'Footer text',
};
