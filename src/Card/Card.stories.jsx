import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content internally rendered inside the Sandbox Card architecture.'
    }
  }
};

export const Default = {
  args: {
    children: 'This is the Sandur Card component. Hover over me to see the orange border action.',
  },
};
