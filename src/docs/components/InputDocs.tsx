import React from 'react';
import { SandCodeTabs, SandInputGroup } from '../../components';

export const InputDocs: React.FC = () => (
  <section id="inputs" className="docs-section">
    <h2 className="section-title">Inputs & Forms</h2>
    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Text Input</h3>

      <div className="sand-preview-area sand-preview-area-stack sand-preview-area-form">
        <SandInputGroup label="Default Input" placeholder="Enter text..." />
        <SandInputGroup
          label="Prefilled Input"
          defaultValue="sandurtech/design-system"
          helperText="Use a clear, human-readable resource name."
        />
        <SandInputGroup
          label="Error State"
          error
          defaultValue="Invalid data"
          helperText="Please correct this field."
          groupClassName="u-mt-4"
        />
      </div>

      <div className="sand-usage-grid">
        <div className="sand-usage-item">
          <h4>Description</h4>
          <p>Standardized form fields for user data entry.</p>
        </div>
        <div className="sand-usage-item">
          <h4>When to Use</h4>
          <p>For configuration parameters, search boxes, and data submission.</p>
        </div>
        <div className="sand-usage-item">
          <h4>How to Use</h4>
          <p>Use <code>&lt;SandInputGroup /&gt;</code> with a <code>label</code> and optional <code>error</code> and <code>helperText</code>.</p>
        </div>
      </div>

      <SandCodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { SandInputGroup } from '@sandurtech/sandui';

const Form = () => (
  <SandInputGroup
    label="Microservice Name"
    error={true}
    helperText="Name is required"
  />
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
