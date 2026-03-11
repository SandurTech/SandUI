import React from 'react';
import { Button, CodeTabs } from '../../components';

export const ButtonDocs: React.FC = () => (
  <section id="buttons" className="docs-section">
    <h2 className="section-title">Buttons</h2>
    <div className="sand-comp-doc">
      <div className="sand-comp-name">Button Component</div>

      <div className="sand-preview-area">
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
        <Button variant="outline">Outline Action</Button>
        <Button variant="primary" disabled>Disabled State</Button>
      </div>

      <div className="sand-usage-grid">
        <div className="sand-usage-item">
          <h4>Description</h4>
          <p>Buttons trigger critical actions or events in our microservices.</p>
        </div>
        <div className="sand-usage-item">
          <h4>When to Use</h4>
          <p>For generating results, submitting forms, or primary UI navigation.</p>
        </div>
        <div className="sand-usage-item">
          <h4>How to Use</h4>
          <p>Apply <code>variant="primary"</code> or <code>secondary</code>.</p>
        </div>
      </div>

      <CodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { Button } from '@sandurtech/sand-ui';

const App = () => (
  <Button variant="primary" onClick={generate}>
    Generate Results
  </Button>
);`
          }
        ]}
      />
    </div>
  </section>
);
