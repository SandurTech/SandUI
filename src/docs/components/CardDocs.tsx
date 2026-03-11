import React from 'react';
import { Card, Button, CodeTabs } from '../../components';

export const CardDocs: React.FC = () => (
  <section id="cards" className="docs-section">
    <h2 className="section-title">Cards</h2>
    <div className="sand-comp-doc">
      <div className="sand-comp-name">Standard Card</div>

      <div className="sand-preview-area">
        <Card
          className="docs-project-card"
          header="Official Documentation"
          footer={
            <Button variant="secondary" className="docs-inline-button">
              <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
              Read More
            </Button>
          }
        >
          <p className="docs-body-copy">Explore the full potential of Sand UI in our microservice architecture.</p>
        </Card>
        <Card
          className="docs-project-card"
          header="System Status"
          footer={
            <Button variant="outline" className="docs-inline-button">
              <span className="material-symbols-rounded" aria-hidden="true">monitoring</span>
              Inspect
            </Button>
          }
        >
          <p className="docs-body-copy">Track deployment health, release readiness, and design adoption metrics from a single surface.</p>
        </Card>
      </div>

      <div className="sand-usage-grid">
        <div className="sand-usage-item">
          <h4>Description</h4>
          <p>Containers that group related content and actions.</p>
        </div>
        <div className="sand-usage-item">
          <h4>Why to Use</h4>
          <p>Provides visual structure and hierarchy to complex tool interfaces.</p>
        </div>
        <div className="sand-usage-item">
          <h4>How to Use</h4>
          <p>Use <code>&lt;Card&gt;</code> with optional <code>header</code> and <code>footer</code> props.</p>
        </div>
      </div>

      <CodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { Card, Button } from '@sandurtech/sandui';

<Card header="Project Alpha">
  <p>Content goes here...</p>
  <Button variant="secondary">
    <span className="material-symbols-rounded" aria-hidden="true">visibility</span>
    View
  </Button>
</Card>`
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
