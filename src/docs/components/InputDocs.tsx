import React, { useState } from 'react';
import { SandCodeTabs, SandFormGroup, SandInput, SandInputGroup, SandTextarea, SandSelect } from '../../components';

export const InputDocs: React.FC = () => {
  const [selectValue, setSelectValue] = useState('');

  return (
    <section id="inputs" className="docs-section">
      <h2 className="section-title">Inputs & Forms</h2>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandInputGroup</h3>
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
          />
        </div>
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import { SandInputGroup } from '@sandurtech/sandui';\n\n<SandInputGroup label="Service Name" placeholder="e.g. auth-service" />`
            }
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandTextarea</h3>
        <div className="sand-preview-area sand-preview-area-stack sand-preview-area-form">
          <SandTextarea 
            label="Description" 
            placeholder="Tell us more about your project..." 
            helperText="Supports multi-line text entry."
          />
        </div>
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import { SandTextarea } from '@sandurtech/sandui';\n\n<SandTextarea label="Bio" placeholder="Bio..." rows={4} />`
            }
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandSelect</h3>
        <p className="sand-comp-desc">Custom-styled selection menu with full keyboard and ARIA support.</p>
        <div className="sand-preview-area sand-preview-area-stack sand-preview-area-form">
          <SandSelect
            label="Region"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: 'us-east', label: 'US East (N. Virginia)' },
              { value: 'eu-west', label: 'EU West (Ireland)' },
              { value: 'ap-south', label: 'Asia Pacific (Mumbai)' },
              { value: 'disabled', label: 'Disabled Region', disabled: true },
            ]}
          />
        </div>
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import { SandSelect } from '@sandurtech/sandui';

<SandSelect
  label="Region"
  options={[
    { value: 'us-east', label: 'US East' },
    { value: 'eu-west', label: 'EU West' }
  ]}
  onChange={(val) => console.log(val)}
/>`
            }
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">Low-level: SandFormGroup & SandInput</h3>
        <div className="sand-preview-area sand-preview-area-stack sand-preview-area-form">
          <SandFormGroup label="Custom Layout">
            <div style={{ display: 'flex', gap: 'var(--sand-space-2)' }}>
              <SandInput placeholder="First Name" />
              <SandInput placeholder="Last Name" />
            </div>
          </SandFormGroup>
        </div>
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import { SandFormGroup, SandInput } from '@sandurtech/sandui';

<SandFormGroup label="Search">
  <SandInput type="search" placeholder="..." />
</SandFormGroup>`,
            },
          ]}
        />
      </div>
    </section>
  );
};
