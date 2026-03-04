import React from 'react';
import SandLink from './Link';

export default {
  title: '02. Atoms/SandLink',
  component: SandLink,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'muted', 'accent'] },
    external: { control: 'boolean' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
};

export const Default = { args: { href: '#', children: 'Default Link' } };
export const Muted = { args: { href: '#', variant: 'muted', children: 'Muted Link' } };
export const Accent = { args: { href: '#', variant: 'accent', children: 'Accent Link' } };
export const External = { args: { href: 'https://sandurtech.vercel.app', external: true, children: 'External Link' } };
