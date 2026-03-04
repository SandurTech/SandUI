import React from 'react';
import SandKbd from './Kbd';

export default {
  title: '02. Atoms/SandKbd',
  component: SandKbd,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: '⌘',
  },
};

export const Shortcut = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--theme-text)', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
      Save document <SandKbd>⌘</SandKbd> + <SandKbd>S</SandKbd>
    </div>
  ),
};
