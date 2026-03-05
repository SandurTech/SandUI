import React from 'react';
import SandBadge from './Badge';

export default {
  title: '02. Atoms/SandBadge',
  component: SandBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'error'] },
    children: { control: 'text' },
  },
};

export const Default = { args: { children: 'Default' } };
export const Active = { args: { variant: 'success', children: 'Active' } };
export const Disabled = { args: { children: 'Disabled', style: { opacity: 0.5 } } };
export const Success = { args: { variant: 'success', children: 'Success' } };
export const Warning = { args: { variant: 'warning', children: 'Pending' } };
export const Error = { args: { variant: 'error', children: 'Failed' } };

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <SandBadge>Default</SandBadge>
      <SandBadge variant="success">Active</SandBadge>
      <SandBadge variant="warning">Pending</SandBadge>
      <SandBadge variant="error">Failed</SandBadge>
    </div>
  ),
};
