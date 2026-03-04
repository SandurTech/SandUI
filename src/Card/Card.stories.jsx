import React from 'react';
import SandCard from './Card';
import SandButton from '../Button/Button';

export default {
  title: '03. Molecules/SandCard',
  component: SandCard,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Card content.' },
  },
};

export const Default = {
  args: {
    children: 'A clean, hoverable card container from the SandUI design system.',
  },
};

export const RichContent = {
  name: 'Rich Content',
  render: () => (
    <SandCard>
      <h3 style={{ marginBottom: '8px', color: 'var(--theme-text)', fontFamily: 'Outfit, sans-serif' }}>
        QuickCalc
      </h3>
      <p style={{ color: 'var(--theme-text-muted)', marginBottom: '16px', fontSize: '14px' }}>
        A niche calculator tool by SandurTech. Simple, fast, and remarkably clean.
      </p>
      <SandButton variant="primary">Explore →</SandButton>
    </SandCard>
  ),
};

export const Grid = {
  name: 'Card Grid',
  render: () => (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '16px', padding: '16px',
    }}>
      {['QuickCalc', 'ColorForge', 'MarkdownLab'].map((tool) => (
        <SandCard key={tool}>
          <h3 style={{ marginBottom: '8px', color: 'var(--theme-text)' }}>{tool}</h3>
          <p style={{ color: 'var(--theme-text-muted)', fontSize: '14px' }}>
            A handcrafted microservice from SandurTech.
          </p>
        </SandCard>
      ))}
    </div>
  ),
};
