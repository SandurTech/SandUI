import React from 'react';
import Navbar from './Navbar';
import Button from '../Button/Button';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Brand title displayed in the Navbar.',
    },
    children: {
      control: false,
      description: 'Navigation items or actions rendered on the right side.',
    },
  },
};

export const Default = {
  args: {
    title: 'SandUI',
  },
};

export const WithActions = {
  args: {
    title: 'SandUI',
  },
  render: (args) => (
    <Navbar {...args}>
      <Button>Get Started</Button>
    </Navbar>
  ),
};
