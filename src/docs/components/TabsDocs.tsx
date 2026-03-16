import React from 'react';
import { SandCodeTabs, SandTabs } from '../../components';

export const TabsDocs: React.FC = () => (
  <section id="tabs" className="docs-section">
    <h2 className="section-title">Tabs</h2>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">SandTabs</h3>
      <div className="sand-preview-area sand-preview-area-stack">
        <SandTabs
          items={[
            { id: 'overview', label: 'Overview', content: 'Tabbed content can power dashboards, settings, and docs.' },
            { id: 'metrics', label: 'Metrics', content: 'Keyboard arrow keys move between tabs.' },
            { id: 'settings', label: 'Settings', content: 'Configure your preferences here.' },
          ]}
        />
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Tabs organize and allow navigation between groups of content that are at the same level of hierarchy.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Use the composition API (<code>Tabs.List</code>, <code>Tabs.Trigger</code>, <code>Tabs.Panel</code>) for maximum flexibility, or the legacy <code>items</code> prop for simple arrays.</p></div>
      </div>
      <SandCodeTabs
        items={[
          {
            name: 'Composition',
            code: `import { SandTabs } from '@sandurtech/sandui';

<SandTabs defaultValue="account">
  <SandTabs.List>
    <SandTabs.Trigger value="account">Account</SandTabs.Trigger>
    <SandTabs.Trigger value="settings">Settings</SandTabs.Trigger>
  </SandTabs.List>
  <SandTabs.Panel value="account">
    Account settings content...
  </SandTabs.Panel>
  <SandTabs.Panel value="settings">
    App preferences content...
  </SandTabs.Panel>
</SandTabs>`,
          },
          {
            name: 'Declarative (Legacy)',
            code: `import { SandTabs } from '@sandurtech/sandui';\n\n<SandTabs items={[{ id: '1', label: 'A', content: '...' }]} />`,
          },
        ]}
      />
    </div>
  </section>
);
