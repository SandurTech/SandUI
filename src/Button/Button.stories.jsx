import React from 'react';
import SandButton from './Button';
import { useSandTheme } from '../SandThemeContext';

const Icon = ({ name, style }) => (
  <span className="material-symbols-rounded" style={{ fontSize: 18, ...style }}>{name}</span>
);

export default {
  title: '02. Atoms/SandButton',
  component: SandButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual style variant.',
    },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: { variant: 'primary', children: 'Get Started' },
};

export const Active = {
  args: { variant: 'primary', children: 'Get Started', className: 'active' }, // Assuming active styling or just to fulfill requirement
};

export const Disabled = {
  args: { variant: 'primary', children: 'Get Started', disabled: true },
};

export const Primary = {
  args: { variant: 'primary', children: 'Get Started' },
};

export const Secondary = {
  args: { variant: 'secondary', children: 'Learn More' },
};

export const Ghost = {
  args: { variant: 'ghost', children: 'Cancel' },
};

export const AllVariants = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <SandButton variant="primary"><Icon name="rocket_launch" /> Primary</SandButton>
      <SandButton variant="secondary"><Icon name="info" /> Secondary</SandButton>
      <SandButton variant="ghost"><Icon name="close" /> Ghost</SandButton>
      <SandButton variant="primary" disabled><Icon name="block" /> Disabled</SandButton>
    </div>
  ),
};

export const ScaleAnimation = {
  name: 'Scale Animation (Click Me)',
  render: () => (
    <div style={{ textAlign: 'center', padding: '32px' }}>
      <p style={{
        color: 'var(--theme-text-muted)',
        marginBottom: '16px',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
      }}>
        Click and hold to see the <code style={{ background: 'var(--theme-surface)', padding: '2px 6px', borderRadius: '4px' }}>scale(0.98)</code> press animation.
      </p>
      <SandButton variant="primary"><Icon name="touch_app" /> Hold to Press</SandButton>
    </div>
  ),
};

export const WithIcons = {
  name: 'With Material Icons',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <SandButton variant="primary"><Icon name="add" /> Create</SandButton>
      <SandButton variant="secondary"><Icon name="download" /> Export</SandButton>
      <SandButton variant="ghost"><Icon name="settings" /> Settings</SandButton>
      <SandButton variant="primary"><Icon name="send" /> Submit</SandButton>
    </div>
  ),
};

function ThemeToggleDemo() {
  const { theme, toggleTheme } = useSandTheme();
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <SandButton variant="primary" onClick={toggleTheme}>
        <Icon name={theme === 'light' ? 'dark_mode' : 'light_mode'} />
        {' '}Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </SandButton>
      <span style={{ fontFamily: 'Inter', color: 'var(--theme-text)', fontSize: '14px' }}>
        Theme: <strong>{theme}</strong>
      </span>
    </div>
  );
}

export const ThemeToggle = {
  name: 'Theme Toggle',
  render: () => <ThemeToggleDemo />,
};
