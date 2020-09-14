import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = ({ modifierClass = '', image = null }) => (
  <Card modifier_class={modifierClass} image={image}>
    <div className="card__content">
      <h4>Project Name</h4>
      <p>Project description.</p>
    </div>
  </Card>
);

Template.propTypes = {
  modifierClass: PropTypes.string,
  image: PropTypes.element,
};

Template.defaultProps = {
  modifierClass: '',
  image: null,
};

export const Default = Template.bind({});
Default.args = {
  label: 'Card',
};

export const Image = Template.bind({});
Image.args = {
  label: 'Card',
  image: 'https://source.unsplash.com/random',
};
