import React from 'react';
import { Badge, Divider, CodeTabs } from '../../components';

export const UtilitiesDocs: React.FC = () => (
  <section id="utilities" className="docs-section">
    <h2 className="section-title">Utilities</h2>

    <div className="sand-comp-doc">
      <div className="sand-comp-name">Badges</div>
      <div className="sand-preview-area">
        <Badge variant="primary">Official</Badge>
        <Badge variant="secondary">Draft</Badge>
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Status indicators and labels.</p></div>
        <div className="sand-usage-item"><h4>When to Use</h4><p>To highlight metadata or status states.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Use <code>&lt;Badge variant="primary"&gt;</code>.</p></div>
      </div>
      <CodeTabs
        tabs={[{ name: 'React (TS)', code: `<Badge variant="primary">Official</Badge>` }]}
      />
    </div>

    <div className="sand-comp-doc">
      <div className="sand-comp-name">Dividers</div>
      <div className="sand-preview-area" style={{ flexDirection: 'column', gap: '1rem', alignItems: 'stretch' }}>
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Content Above</p>
        <Divider />
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Content Below</p>
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Visual separators for grouping content.</p></div>
        <div className="sand-usage-item"><h4>When to Use</h4><p>To create semantic separation between blocks.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Use the <code>&lt;Divider /&gt;</code> component.</p></div>
      </div>
      <CodeTabs
        tabs={[{ name: 'React (TS)', code: `<Divider />` }]}
      />
    </div>
  </section>
);
