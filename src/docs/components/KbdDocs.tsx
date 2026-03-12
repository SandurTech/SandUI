import React from 'react';
import { SandCodeTabs, SandKBD } from '../../components';

export const KbdDocs: React.FC = () => (
  <section id="kbd" className="docs-section">
    <h2 className="section-title">Kbd</h2>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Keyboard Shortcuts</h3>
      <div className="sand-preview-area sand-preview-area-stack">
        <div className="docs-shortcut-row">
          <span className="docs-body-copy">Open command palette</span>
          <div className="docs-shortcut-keys">
            <SandKBD>Cmd</SandKBD>
            <SandKBD>K</SandKBD>
          </div>
        </div>
        <div className="docs-shortcut-row">
          <span className="docs-body-copy">Save changes</span>
          <div className="docs-shortcut-keys">
            <SandKBD>Cmd</SandKBD>
            <SandKBD>S</SandKBD>
          </div>
        </div>
        <div className="docs-shortcut-row">
          <span className="docs-body-copy">Toggle preview</span>
          <div className="docs-shortcut-keys">
            <SandKBD>Shift</SandKBD>
            <SandKBD>P</SandKBD>
          </div>
        </div>
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Kbd displays keyboard shortcuts and command hints in a compact, system-like keycap style.</p></div>
        <div className="sand-usage-item"><h4>When to Use</h4><p>Use it in command palettes, settings panels, onboarding tips, and docs where shortcuts speed up repeat tasks.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Pair related keys side by side and keep labels terse so the shortcut stays scannable.</p></div>
      </div>
      <SandCodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { SandKBD } from '@sandurtech/sandui';

<SandKBD>Cmd</SandKBD>
<SandKBD>K</SandKBD>`,
          },
        ]}
      />
    </div>
  </section>
);
