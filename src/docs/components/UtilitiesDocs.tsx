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
        <Badge variant="primary">Live</Badge>
        <Badge variant="secondary">Internal</Badge>
        <Badge variant="success">
          <span className="material-symbols-rounded" aria-hidden="true">check_circle</span>
          Success
        </Badge>
        <Badge variant="failed">
          <span className="material-symbols-rounded" aria-hidden="true">cancel</span>
          Failed
        </Badge>
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Status indicators and labels.</p></div>
        <div className="sand-usage-item"><h4>When to Use</h4><p>To highlight metadata or status states.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Use <code>&lt;Badge variant="primary"&gt;</code>.</p></div>
      </div>
      <CodeTabs
        tabs={[
          { name: 'React (TS)', code: `import { Badge } from '@sandurtech/sandui';\n\n<Badge variant="success">Success</Badge>\n<Badge variant="failed">Failed</Badge>` },
          { name: 'Install', code: `npm i @sandurtech/sandui` },
        ]}
      />
    </div>

    <div className="sand-comp-doc">
      <div className="sand-comp-name">Dividers</div>
      <div className="sand-preview-area sand-preview-area-stack">
        <p className="docs-meta-copy">Content Above</p>
        <Divider />
        <p className="docs-meta-copy">Content Below</p>
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
