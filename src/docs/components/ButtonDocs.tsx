import React from 'react';
import { SandButton, SandCodeTabs } from '../../components';

export const ButtonDocs: React.FC = () => (
  <section id="buttons" className="docs-section">
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SandButton",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "description": "A high-performance Accessible React Component for user actions, featuring semantic markup, focus management, and TypeScript support.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      })}
    </script>
    <h2 className="section-title">Buttons</h2>
    
    <div className="sand-comp-doc">
      <p className="sand-comp-desc">
        SandButton is a foundational Accessible React Component within the SandUI TypeScript UI Library. 
        Designed for high-performance applications, it provides semantic <code>&lt;button&gt;</code> markup, flawless 
        keyboard navigation, and robust focus management. Whether you are building complex SaaS forms, 
        intricate admin dashboards, or primary call-to-actions, SandButton delivers a reliable, fully typed 
        interface that integrates seamlessly into any modern frontend architecture. It natively supports standard HTML attributes and forwards refs for ultimate flexibility.
      </p>
    </div>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Button Component</h3>

      <div className="sand-preview-area">
        <SandButton variant="primary">
          <span className="material-symbols-rounded" aria-hidden="true">rocket_launch</span>
          Primary Action
        </SandButton>
        <SandButton variant="secondary">
          <span className="material-symbols-rounded" aria-hidden="true">dashboard_customize</span>
          Secondary Action
        </SandButton>
        <SandButton variant="outline">
          <span className="material-symbols-rounded" aria-hidden="true">tune</span>
          Outline Action
        </SandButton>
        <SandButton variant="success">
          <span className="material-symbols-rounded" aria-hidden="true">check_circle</span>
          Success State
        </SandButton>
        <SandButton variant="failed">
          <span className="material-symbols-rounded" aria-hidden="true">cancel</span>
          Failed State
        </SandButton>
        <SandButton variant="primary" disabled>
          <span className="material-symbols-rounded" aria-hidden="true">block</span>
          Disabled State
        </SandButton>
      </div>

      <div className="sand-preview-area">
        <SandButton variant="primary" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">download</span>
          Download Kit
        </SandButton>
        <SandButton variant="secondary" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">add_circle</span>
          Create Entry
        </SandButton>
        <SandButton variant="outline" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">north_east</span>
          Open Docs
        </SandButton>
        <SandButton variant="success" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">task_alt</span>
          Publish Ready
        </SandButton>
        <SandButton variant="failed" className="docs-inline-button">
          <span className="material-symbols-rounded" aria-hidden="true">error</span>
          Validation Failed
        </SandButton>
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

      <SandCodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { SandButton } from '@sandurtech/sandui';

const App = () => (
  <SandButton variant="primary" onClick={generate}>
    <span className="material-symbols-rounded" aria-hidden="true">auto_awesome</span>
    Generate Results
  </SandButton>
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
