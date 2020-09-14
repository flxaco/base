import React from 'react';
import Card from './card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = args => (
  <Card {...args}>
    <div className="card__content">
      <h4>Project Name</h4>
      <p>Project description.</p>
    </div>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  modifierClass: '',
  image: null,
};

export const Image = Template.bind({});
Image.args = {
  modifierClass: 'card--image',
  image: 'https://source.unsplash.com/random',
};
