import React from 'react';
import SandSidebar from './Sidebar';

export default {
  title: '04. Organisms/SandSidebar',
  component: SandSidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export const Default = {
  args: {
    items: [
      { icon: 'dashboard', label: 'Dashboard', active: true },
      { icon: 'bar_chart', label: 'Analytics' },
      { icon: 'settings', label: 'Settings' },
      { icon: 'person', label: 'Profile' },
    ],
  },
};

export const WithNestedContent = {
  name: 'With Extra Content',
  render: () => (
    <SandSidebar items={[
      { icon: 'home', label: 'Home', active: true },
      { icon: 'folder', label: 'Projects' },
      { icon: 'code', label: 'Code' },
    ]}>
      <div style={{ padding: '16px', marginTop: 'auto', fontSize: '12px', color: 'var(--theme-text-muted)' }}>
        SandUI v0.1.0
      </div>
    </SandSidebar>
  ),
};
