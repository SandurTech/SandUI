import React from 'react';
import { CodeTabs, Kbd } from '../../components';

export const KbdDocs: React.FC = () => (
  <section id="kbd" className="docs-section">
    <h2 className="section-title">Kbd</h2>

    <div className="sand-comp-doc">
      <div className="sand-comp-name">Keyboard Shortcuts</div>
      <div className="sand-preview-area sand-preview-area-stack">
        <div className="docs-shortcut-row">
          <span className="docs-body-copy">Open command palette</span>
          <div className="docs-shortcut-keys">
            <Kbd>Cmd</Kbd>
            <Kbd>K</Kbd>
          </div>
        </div>
        <div className="docs-shortcut-row">
          <span className="docs-body-copy">Save changes</span>
          <div className="docs-shortcut-keys">
            <Kbd>Cmd</Kbd>
            <Kbd>S</Kbd>
          </div>
        </div>
        <div className="docs-shortcut-row">
          <span className="docs-body-copy">Toggle preview</span>
          <div className="docs-shortcut-keys">
            <Kbd>Shift</Kbd>
            <Kbd>P</Kbd>
          </div>
        </div>
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Kbd displays keyboard shortcuts and command hints in a compact, system-like keycap style.</p></div>
        <div className="sand-usage-item"><h4>When to Use</h4><p>Use it in command palettes, settings panels, onboarding tips, and docs where shortcuts speed up repeat tasks.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Pair related keys side by side and keep labels terse so the shortcut stays scannable.</p></div>
      </div>
      <CodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { Kbd } from '@sandurtech/sandui';

<Kbd>Cmd</Kbd>
<Kbd>K</Kbd>`,
          },
        ]}
      />
    </div>
  </section>
);
