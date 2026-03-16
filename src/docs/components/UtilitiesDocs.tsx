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
      <h3 className="sand-comp-name">Icon Configuration</h3>
      <p className="sand-comp-desc">
        Use <code>SandIconProvider</code> to remap internal icons or use a completely different icon library like Lucide.
      </p>
      <SandCodeTabs
        items={[
          {
            name: 'Remapping',
            code: `import { SandIconProvider } from '@sandurtech/sandui';\nimport { Home, Settings } from 'lucide-react';\n\nconst iconMap = {\n  home: Home,\n  settings: Settings,\n};\n\n<SandIconProvider icons={iconMap}>\n  <App />\n</SandIconProvider>`,
          },
          {
            name: 'Custom Renderer',
            code: `import { SandIconProvider } from '@sandurtech/sandui';\n\n<SandIconProvider renderIcon={(name, props) => <i className={\`fa-\${name}\`} />}>\n  <App />\n</SandIconProvider>`,
          },
        ]}
      />
    </div>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">SandChip / SandTag</h3>
      <p className="sand-comp-desc">Compact elements for tags, attributes, or statuses.</p>
      <div className="sand-preview-area sand-preview-area-stack">
        <div style={{ display: 'flex', gap: 'var(--sand-space-2)', flexWrap: 'wrap' }}>
          <SandChip variant="primary">Primary</SandChip>
          <SandChip variant="secondary">Secondary</SandChip>
          <SandChip variant="outline" icon="verified">Verified</SandChip>
          <SandChip variant="success">Active</SandChip>
          <SandChip variant="error" onClose={() => alert('Close clicked')}>Dismissible</SandChip>
        </div>
      </div>
      <SandCodeTabs
        items={[
          {
            name: 'React (TS)',
            code: `import { SandChip, SandTag } from '@sandurtech/sandui';\n\n<SandChip variant="success">Active</SandChip>\n<SandTag icon="settings">System</SandTag>`,
          },
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
        items={[{ name: 'React (TS)', code: `<SandDivider />` }]}
      />
    </div>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">State Hooks</h3>
      <p className="sand-comp-desc">
        Reusable logic for managing common UI states like visibility, breakpoints, and controlled values.
      </p>
      <SandCodeTabs
        items={[
          {
            name: 'useDisclosure',
            code: `import { useDisclosure, SandModal, SandButton } from '@sandurtech/sandui';

    function Example() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <>
      <SandButton onClick={onOpen}>Open Modal</SandButton>
      <SandModal open={isOpen} onClose={onClose}>...</SandModal>
    </>
    );
    }`,
          },
          {
            name: 'useBreakpoint',
            code: `import { useBreakpoint } from '@sandurtech/sandui';

    function Example() {
    const breakpoint = useBreakpoint(); // 'base' | 'sm' | 'md' | 'lg' | 'xl'
    return <div>Current: {breakpoint}</div>;
    }`,
          },
        ]}
      />
    </div>

  </section>
);
