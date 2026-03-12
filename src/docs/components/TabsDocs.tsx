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
        <div className="sand-usage-item"><h4>How to Use</h4><p>Use <code>SandTabs</code> with an <code>items</code> array containing <code>id</code>, <code>label</code>, and <code>content</code>.</p></div>
      </div>
      <SandCodeTabs tabs={[{ name: 'React (TS)', code: `import { SandTabs } from '@sandurtech/sandui';\n\n<SandTabs items={[{ id: '1', label: 'A', content: '...' }]} />` }]} />
    </div>
  </section>
);
