import React from 'react';

import Tag from './tag';

export default {
  title: 'Example/Tag',
  component: Tag,
};

const Template = () => (
  <Tag title="Skills" tags={['a', 'b', 'c', 'd']} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Tag',
};
