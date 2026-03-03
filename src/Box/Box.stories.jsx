import React from 'react';
import Box from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render the box as.',
      defaultValue: 'div'
    },
    children: {
      control: 'text',
      description: 'Content inside the Box component'
    }
  }
};

export const Default = {
  args: {
    as: 'div',
    children: 'This is the foundational Box layout, with inherited SandUI #F2F2F2 backgrounds and global typography.',
  },
};
