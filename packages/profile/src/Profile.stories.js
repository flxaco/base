import React from 'react';
import Profile from './profile';

export default {
  title: 'Components/Profile',
  component: Profile,
};

const Template = args => <Profile {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Front End Web Developer',
  name: 'Nick Fletcher',
  image: '',
  shortBio: 'Some information about me...',
  links: [
    {
      url: 'https://www.twitter.com/flxa',
      content: '@flxa',
    },
    {
      url: 'https://www.linkedin.com/fletchernick',
      content: 'LinkedIn',
    },
  ],
};
