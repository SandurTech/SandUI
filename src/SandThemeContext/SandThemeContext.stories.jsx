import React from 'react';
import { useSandTheme } from './SandThemeContext';
import SandButton from '../Button/Button';
import SandCard from '../Card/Card';
import SandNavbar from '../Navbar/Navbar';
import SandInput from '../Input/Input';

const Icon = ({ name, size = 20, style }) => (
  <span className="material-symbols-rounded" style={{ fontSize: size, ...style }}>{name}</span>
);

export default {
  title: '01. Foundations/Theme',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

function ThemeDemo() {
  const { theme, toggleTheme } = useSandTheme();
  return (
    <div style={{ background: 'var(--theme-bg)', minHeight: '100vh', transition: 'all 0.3s ease' }}>
      <SandNavbar title="SandurTech">
        <SandButton variant="primary" onClick={toggleTheme}>
          <Icon name={theme === 'light' ? 'dark_mode' : 'light_mode'} size={18} />
          {' '}{theme === 'light' ? 'Dark' : 'Light'}
        </SandButton>
      </SandNavbar>

      <div style={{ padding: '48px 16px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{
          color: 'var(--theme-text)', fontSize: '2rem',
          fontFamily: 'Outfit, sans-serif', marginBottom: '4px',
        }}>
          SandUI Theme System
        </h1>
        <p style={{
          color: 'var(--theme-text-muted)', marginBottom: '40px', fontSize: '1rem',
          lineHeight: '1.6',
        }}>
          Toggle dark/light mode. All Sand* components respond to the{' '}
          <code style={{
            background: 'var(--theme-surface)', padding: '2px 8px',
            borderRadius: '4px', fontSize: '0.875rem',
          }}>data-theme</code>{' '}attribute.
        </p>

        {/* Buttons */}
        <SectionTitle icon="smart_button" title="Buttons" />
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <SandButton variant="primary"><Icon name="rocket_launch" size={18} /> Primary</SandButton>
          <SandButton variant="secondary"><Icon name="info" size={18} /> Secondary</SandButton>
          <SandButton variant="ghost"><Icon name="close" size={18} /> Ghost</SandButton>
        </div>

        {/* Input */}
        <SectionTitle icon="text_fields" title="Input" />
        <div style={{ maxWidth: '360px', marginBottom: '40px' }}>
          <SandInput label="Email" placeholder="you@sandurtech.com" />
        </div>

        {/* Cards */}
        <SectionTitle icon="dashboard" title="Cards" />
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          <SandCard>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Icon name="palette" size={22} style={{ color: 'var(--sandui-accent)' }} />
              <h3 style={{ color: 'var(--theme-text)', margin: 0 }}>Surface Card</h3>
            </div>
            <p style={{ color: 'var(--theme-text-muted)', fontSize: '14px', margin: 0 }}>
              Adapts background and borders to the current theme.
            </p>
          </SandCard>
          <SandCard>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Icon name="token" size={22} style={{ color: 'var(--sandui-accent)' }} />
              <h3 style={{ color: 'var(--theme-text)', margin: 0 }}>Token Driven</h3>
            </div>
            <p style={{ color: 'var(--theme-text-muted)', fontSize: '14px', margin: 0 }}>
              All styling via CSS custom properties.
            </p>
          </SandCard>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <h2 style={{
      color: 'var(--theme-text)', fontSize: '1.125rem',
      marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px',
      fontFamily: 'Inter, sans-serif', fontWeight: 600,
    }}>
      <Icon name={icon} size={22} style={{ color: 'var(--sandui-accent)' }} />
      {title}
    </h2>
  );
}

export const ThemeSystem = {
  name: 'Theme System',
  render: () => <ThemeDemo />,
};
