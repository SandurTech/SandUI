import React from 'react';
import { SandButton, SandCard, SandCodeTabs } from '../../components';

export const CardDocs: React.FC = () => (
  <section id="cards" className="docs-section">
    <h2 className="section-title">Cards</h2>
    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Standard Card</h3>

      <div className="sand-preview-area">
        <SandCard
          className="docs-project-card"
          header="Official Documentation"
          footer={
            <SandButton variant="secondary" className="docs-inline-button">
              <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
              Read More
            </SandButton>
          }
        >
          <p className="docs-body-copy">Explore the full potential of Sand UI in our microservice architecture.</p>
        </SandCard>
        <SandCard
          className="docs-project-card"
          header="System Status"
          footer={
            <SandButton variant="outline" className="docs-inline-button">
              <span className="material-symbols-rounded" aria-hidden="true">monitoring</span>
              Inspect
            </SandButton>
          }
        >
          <p className="docs-body-copy">Track deployment health, release readiness, and design adoption metrics from a single surface.</p>
        </SandCard>
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
          <p>Use <code>&lt;SandCard&gt;</code> with optional <code>header</code> and <code>footer</code> props.</p>
        </div>
      </div>

      <SandCodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { SandCard, SandButton } from '@sandurtech/sandui';

<SandCard header="Project Alpha">
  <p>Content goes here...</p>
  <SandButton variant="secondary">
    <span className="material-symbols-rounded" aria-hidden="true">visibility</span>
    View
  </SandButton>
</SandCard>`
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
