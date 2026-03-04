import React from 'react';
import SandBox from './Box';

export default {
  title: '03. Molecules/SandBox',
  component: SandBox,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'main'],
      description: 'HTML element to render as.',
    },
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'The foundational Box layout primitive with inherited SandUI styles.',
  },
};

export const AsSection = {
  name: 'As <section>',
  args: {
    as: 'section',
    children: 'Rendered as a semantic <section> element.',
    style: { padding: '32px' },
  },
};

export const Nested = {
  name: 'Nested Boxes',
  render: () => (
    <SandBox style={{ padding: '24px' }}>
      <h3 style={{ marginBottom: '16px', color: 'var(--theme-text)' }}>Parent Box</h3>
      <SandBox style={{
        padding: '16px', background: 'var(--theme-surface)',
        borderRadius: '8px', border: '1px solid var(--theme-border)',
      }}>
        <p style={{ color: 'var(--theme-text-muted)' }}>Nested child with surface background.</p>
      </SandBox>
    </SandBox>
  ),
};
