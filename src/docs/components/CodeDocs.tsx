import React from 'react';
import { SandCodeBlock, SandCodeTabs } from '../../components';

export const CodeDocs: React.FC = () => (
  <section id="code" className="docs-section">
    <h2 className="section-title">Code Display</h2>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">SandCodeBlock</h3>
      <div className="sand-preview-area sand-preview-area-stack">
        <SandCodeBlock code="const greeting = 'Hello SandUI';" />
      </div>
      <SandCodeTabs tabs={[{ name: 'React (TS)', code: `import { SandCodeBlock } from '@sandurtech/sandui';\n\n<SandCodeBlock code="const x = 10;" />` }]} />
    </div>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">SandCodeTabs</h3>
      <div className="sand-preview-area sand-preview-area-stack">
        <SandCodeTabs
          tabs={[
            { name: 'Bash', code: 'npm install @sandurtech/sandui' },
            { name: 'Yarn', code: 'yarn add @sandurtech/sandui' },
          ]}
        />
      </div>
      <SandCodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { SandCodeTabs } from '@sandurtech/sandui';\n\n<SandCodeTabs tabs={[{ name: 'npm', code: 'npm i' }, { name: 'yarn', code: 'yarn add' }]} />`,
          },
        ]}
      />
    </div>
  </section>
);
