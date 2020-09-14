import React from 'react';
import Tag from './tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

const Template = args => <Tag {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Skills',
  tags: ['a', 'b', 'c', 'd'],
};
