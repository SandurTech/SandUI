import React from 'react';
import SandNavbar from './Navbar';
import SandButton from '../Button/Button';
import { useSandTheme } from '../SandThemeContext';

const Icon = ({ name, style }) => (
  <span className="material-symbols-rounded" style={{ fontSize: 18, ...style }}>{name}</span>
);

export default {
  title: '04. Organisms/SandNavbar',
  component: SandNavbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    title: { control: 'text', description: 'Brand title.' },
    logo: { control: 'text', description: 'Logo image URL.' },
    fixed: { control: 'boolean', description: 'Fixed positioning.' },
  },
};

export const Default = {
  args: { title: 'SandurTech' },
};

export const WithLogo = {
  args: {
    title: 'SandurTech',
    logo: 'https://sandurtech.vercel.app/images/SandurTech-Logo-SVG.svg',
  },
};

export const WithActions = {
  args: { title: 'SandurTech' },
  render: (args) => (
    <SandNavbar {...args}>
      <a href="#" style={{ color: 'var(--sandui-secondary)', textDecoration: 'none', fontSize: '14px' }}>About</a>
      <a href="#" style={{ color: 'var(--sandui-secondary)', textDecoration: 'none', fontSize: '14px' }}>Tools</a>
      <SandButton variant="primary"><Icon name="arrow_forward" /> Get Started</SandButton>
    </SandNavbar>
  ),
};

export const Glassmorphism = {
  name: 'Glassmorphism Demo',
  render: () => (
    <div style={{
      backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '400px',
    }}>
      <SandNavbar title="SandurTech">
        <SandButton variant="ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
          <Icon name="login" /> Sign In
        </SandButton>
      </SandNavbar>
      <div style={{ padding: '48px 16px', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
        <h2 style={{ marginBottom: '8px' }}>Glassmorphism</h2>
        <p style={{ opacity: 0.8 }}>
          backdrop-filter: blur(12px) with rgba(255, 255, 255, 0.1) border.
        </p>
      </div>
    </div>
  ),
};

function NavbarThemeToggle() {
  const { theme, toggleTheme } = useSandTheme();
  return (
    <div>
      <SandNavbar title="SandurTech">
        <SandButton variant="primary" onClick={toggleTheme}>
          <Icon name={theme === 'light' ? 'dark_mode' : 'light_mode'} />
        </SandButton>
      </SandNavbar>
      <div style={{
        padding: '48px 16px', background: 'var(--theme-bg)',
        color: 'var(--theme-text)', minHeight: '300px', transition: 'all 0.3s ease',
      }}>
        <h2>Theme: {theme}</h2>
        <p style={{ color: 'var(--theme-text-muted)', marginTop: '8px' }}>
          Navbar and content respond to the data-theme attribute.
        </p>
      </div>
    </div>
  );
}

export const ThemeToggle = {
  name: 'Theme Toggle',
  render: () => <NavbarThemeToggle />,
};
