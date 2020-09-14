import React from 'react';
import PropTypes from 'prop-types';

import Profile from './profile';

export default {
  title: 'Example/Profile',
  component: Profile,
};

const Template = () => (
  <Profile 
    title="Front End Web Developer"
    name="Nick Fletcher"
    shortBio="I am a Front End Web Developer"
    links={[
      {
        url: 'https://www.twitter.com/flxa',
        content: '@flxa',
      },
      {
        url: 'https://www.linkedin.com/fletchernick',
        content: 'LinkedIn',
      },
    ]}
  />
);

Template.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.node,
  shortBio: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

Template.defaultProps = {
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

export const Default = Template.bind({});
Default.args = {
  label: 'Profile',
};
