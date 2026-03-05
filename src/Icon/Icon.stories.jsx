import React from 'react';
import SandIcon from './Icon';

export default {
  title: '02. Atoms/SandIcon',
  component: SandIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'SandUI integrates Google Material Symbols (Rounded). We prefer this over custom icons for scalability. Use any valid Material symbol name as the `name` prop. View all icons at [Google Fonts - Icons](https://fonts.google.com/icons).',
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    size: { control: { type: 'range', min: 16, max: 48, step: 4 } },
    filled: { control: 'boolean' },
  },
};

export const Default = { args: { name: 'settings' } };

export const Active = {
  args: { name: 'settings', style: { color: 'var(--sandui-primary)' } },
};

export const Disabled = {
  args: { name: 'settings', style: { opacity: 0.5 } },
};

export const Large = { args: { name: 'rocket_launch', size: 36 } };
export const Outlined = { args: { name: 'favorite', size: 24, filled: false } };

export const IconGallery = {
  name: 'Icon Gallery',
  render: () => {
    const icons = [
      'home', 'settings', 'search', 'add', 'delete', 
      'person', 'cloud', 'image', 'edit', 'done'
    ];
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {icons.map((icon) => (
          <div key={icon} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            width: '72px', padding: '12px 4px', borderRadius: '8px',
            border: '1px solid var(--theme-border)', gap: '6px',
          }}>
            <SandIcon name={icon} size={24} />
            <span style={{ fontSize: '10px', color: 'var(--theme-text-muted)', textAlign: 'center' }}>{icon}</span>
          </div>
        ))}
      </div>
    );
  },
};
