import React from 'react';
import { InputGroup, CodeTabs } from '../../components';

export const InputDocs: React.FC = () => (
  <section id="inputs" className="docs-section">
    <h2 className="section-title">Inputs & Forms</h2>
    <div className="sand-comp-doc">
      <div className="sand-comp-name">Text Input</div>

      <div className="sand-preview-area" style={{ flexDirection: 'column', alignItems: 'stretch', maxWidth: '500px', margin: '0 auto' }}>
        <InputGroup label="Default Input" placeholder="Enter text..." />
        <InputGroup
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
          <p>Use <code>&lt;InputGroup /&gt;</code> with a <code>label</code> and optional <code>error</code> and <code>helperText</code>.</p>
        </div>
      </div>

      <CodeTabs
        tabs={[
          {
            name: 'React (TS)',
            code: `import { InputGroup } from '@sandurtech/sand-ui';

const Form = () => (
  <InputGroup
    label="Microservice Name"
    error={true}
    helperText="Name is required"
  />
);`
          }
        ]}
      />
    </div>
  </section>
);
