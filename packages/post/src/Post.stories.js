import React from 'react';
import Post from './post';

export default {
  title: 'Components/Post',
  component: Post,
};

const Template = args => (
  <Post {...args}>{args.children}</Post>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Example Post',
  skills: ['a', 'b'],
  tools: ['1', '2'],
  slug: '',
  showBackLink: true,
  children: <p>This is an example post.</p>,
};
