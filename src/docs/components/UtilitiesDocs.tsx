import React from 'react';
import { SandBadge, SandCodeTabs, SandDivider } from '../../components';

export const UtilitiesDocs: React.FC = () => (
  <section id="utilities" className="docs-section">
    <h2 className="section-title">Utilities</h2>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Badges</h3>
      <div className="sand-preview-area">
        <SandBadge variant="primary">Official</SandBadge>
        <SandBadge variant="secondary">Draft</SandBadge>
        <SandBadge variant="primary">Live</SandBadge>
        <SandBadge variant="secondary">Internal</SandBadge>
        <SandBadge variant="success">
          <span className="material-symbols-rounded" aria-hidden="true">check_circle</span>
          Success
        </SandBadge>
        <SandBadge variant="failed">
          <span className="material-symbols-rounded" aria-hidden="true">cancel</span>
          Failed
        </SandBadge>
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Status indicators and labels.</p></div>
        <div className="sand-usage-item"><h4>When to Use</h4><p>To highlight metadata or status states.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Use <code>&lt;SandBadge variant="primary"&gt;</code>.</p></div>
      </div>
      <SandCodeTabs
        tabs={[
          { name: 'React (TS)', code: `import { SandBadge } from '@sandurtech/sandui';\n\n<SandBadge variant="success">Success</SandBadge>\n<SandBadge variant="failed">Failed</SandBadge>` },
          { name: 'Install', code: `npm i @sandurtech/sandui` },
        ]}
      />
    </div>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Dividers</h3>
      <div className="sand-preview-area sand-preview-area-stack">
        <p className="docs-meta-copy">Content Above</p>
        <SandDivider />
        <p className="docs-meta-copy">Content Below</p>
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Visual separators for grouping content.</p></div>
        <div className="sand-usage-item"><h4>When to Use</h4><p>To create semantic separation between blocks.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Use the <code>&lt;SandDivider /&gt;</code> component.</p></div>
      </div>
      <SandCodeTabs
        tabs={[{ name: 'React (TS)', code: `<SandDivider />` }]}
      />
    </div>
  </section>
);
