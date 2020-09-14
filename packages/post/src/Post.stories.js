import React from 'react';

import Post from './post';

export default {
  title: 'Example/Post',
  component: Post,
};

const Template = ({ title, children, skills, tools, slug, showBackLink }) => (
  <Post
    title="Example Post"
    skills={['a', 'b']}
    tools={['1', '2']}
    slug="example"
    showBackLink>
      <p>This is an example post.</p>
    </Post>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Post',
};
