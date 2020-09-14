import React from 'react';
import PropTypes from 'prop-types';

import Footer from './footer';

export default {
  title: 'Example/Footer',
  component: Footer,
};

const Template = ({ copyright = '' }) => (
  <Footer copyright="2020 Nick Fletcher. All rights reserved." />
);

Template.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export const Default = Template.bind({});
Default.args = {
  label: 'Footer',
};
