import React from 'react';
import { Card, Button, CodeTabs } from '../../components';

export const CardDocs: React.FC = () => (
  <section id="cards" className="docs-section">
    <h2 className="section-title">Cards</h2>
    <div className="sand-comp-doc">
      <div className="sand-comp-name">Standard Card</div>

      <div className="sand-preview-area">
        <Card
          style={{ maxWidth: '400px' }}
          header="Official Documentation"
          footer={<Button variant="secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>Read More</Button>}
        >
          <p style={{ fontSize: '0.95rem' }}>Explore the full potential of Sand UI in our microservice architecture.</p>
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
            code: `import { Card, Button } from '@sandurtech/sand-ui';

<Card header="Project Alpha">
  <p>Content goes here...</p>
  <Button variant="secondary">View</Button>
</Card>`
          }
        ]}
      />
    </div>
  </section>
);
