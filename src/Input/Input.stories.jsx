import React from 'react';
import SandInput from './Input';

export default {
  title: '03. Molecules/SandInputGroup',
  component: SandInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label text above the input.' },
    placeholder: { control: 'text' },
    error: { control: 'text', description: 'Error message displayed below.' },
    disabled: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
  },
};

export const Default = {
  args: {
    label: 'Email Address',
    placeholder: 'you@sandurtech.com',
  },
};

export const WithError = {
  name: 'With Error',
  args: {
    label: 'Email Address',
    placeholder: 'you@sandurtech.com',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled = {
  args: {
    label: 'Username',
    placeholder: 'sandurtech',
    disabled: true,
  },
};

export const FormExample = {
  name: 'Form Example',
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SandInput label="Full Name" placeholder="Amogha Raj Sandur" />
      <SandInput label="Email" placeholder="hello@sandurtech.com" type="email" />
      <SandInput label="Password" placeholder="••••••••" type="password" />
    </div>
  ),
};
