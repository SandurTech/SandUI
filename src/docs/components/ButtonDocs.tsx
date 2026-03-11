import React from 'react';
import { Button, CodeTabs } from '../../components';

export const ButtonDocs: React.FC = () => (
  <section id="buttons" className="docs-section">
    <h2 className="section-title">Buttons</h2>
    <div className="sand-comp-doc">
      <div className="sand-comp-name">Button Component</div>

      <div className="sand-preview-area">
        <Button variant="primary">
          <span className="material-symbols-rounded" aria-hidden="true">rocket_launch</span>
          Primary Action
        </Button>
        <Button variant="secondary">
          <span className="material-symbols-rounded" aria-hidden="true">dashboard_customize</span>
          Secondary Action
        </Button>
        <Button variant="outline">
          <span className="material-symbols-rounded" aria-hidden="true">tune</span>
          Outline Action
        </Button>
        <Button variant="success">
          <span className="material-symbols-rounded" aria-hidden="true">check_circle</span>
          Success State
        </Button>
        <Button variant="failed">
          <span className="material-symbols-rounded" aria-hidden="true">cancel</span>
          Failed State
        </Button>
        <Button variant="primary" disabled>
          <span className="material-symbols-rounded" aria-hidden="true">block</span>
          Disabled State
        </Button>
      </div>

      <div className="sand-preview-area">
        <Button variant="primary" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">download</span>
          Download Kit
        </Button>
        <Button variant="secondary" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">add_circle</span>
          Create Entry
        </Button>
        <Button variant="outline" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">north_east</span>
          Open Docs
        </Button>
        <Button variant="success" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">task_alt</span>
          Publish Ready
        </Button>
        <Button variant="failed" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">error</span>
          Validation Failed
        </Button>
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
            code: `import { Button } from '@sandurtech/sandui';

const App = () => (
  <Button variant="primary" onClick={generate}>
    <span className="material-symbols-rounded" aria-hidden="true">auto_awesome</span>
    Generate Results
  </Button>
);`
          },
          {
            name: 'Install',
            code: `npm i @sandurtech/sandui`
          }
        ]}
      />
    </div>
  </section>
);
