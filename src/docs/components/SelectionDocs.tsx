import React, { useState } from 'react';
import { Checkbox, ChoiceGroup, CodeTabs, Radio, Switch } from '../../components';

export const SelectionDocs: React.FC = () => {
  const [checks, setChecks] = useState({
    validation: true,
    summary: false,
    maintenance: true,
  });
  const [environment, setEnvironment] = useState<'production' | 'staging'>('production');

  return (
    <>
      <section id="checkboxes" className="docs-section">
        <h2 className="section-title">Checkboxes</h2>
        <div className="sand-comp-doc">
          <div className="sand-comp-name">Multi-Selection Choices</div>
          <div className="sand-preview-area sand-preview-area-stack sand-preview-area-form">
            <ChoiceGroup>
              <Checkbox
                label="Enable deployment checks"
                description="Run pre-publish validation before release."
                checked={checks.validation}
                onChange={(event) => setChecks((current) => ({ ...current, validation: event.target.checked }))}
              />
              <Checkbox
                label="Send release summary"
                description="Post update details to the engineering channel."
                checked={checks.summary}
                onChange={(event) => setChecks((current) => ({ ...current, summary: event.target.checked }))}
              />
            </ChoiceGroup>
            <div className="docs-live-panel">
              <div className="docs-live-row"><strong>Checks</strong><span>{checks.validation ? 'enabled' : 'disabled'}</span></div>
              <div className="docs-live-row"><strong>Summary</strong><span>{checks.summary ? 'send' : 'skip'}</span></div>
            </div>
          </div>
          <div className="sand-usage-grid">
            <div className="sand-usage-item"><h4>Description</h4><p>Checkboxes allow users to select multiple independent options in a single group.</p></div>
            <div className="sand-usage-item"><h4>When to Use</h4><p>Use them when each option can be turned on or off without affecting the others.</p></div>
            <div className="sand-usage-item"><h4>How to Use</h4><p>Write labels as standalone decisions and use helper text only when a state needs context.</p></div>
          </div>
          <CodeTabs
            tabs={[
              {
                name: 'React (TS)',
                code: `import { Checkbox } from '@sandurtech/sandui';

<Checkbox label="Enable notifications" defaultChecked />
<Checkbox label="Send release summary" />`,
              },
            ]}
          />
        </div>
      </section>

      <section id="radio-buttons" className="docs-section">
        <h2 className="section-title">Radio Buttons</h2>
        <div className="sand-comp-doc">
          <div className="sand-comp-name">Single-Choice Selection</div>
          <div className="sand-preview-area sand-preview-area-stack sand-preview-area-form">
            <ChoiceGroup>
              <Radio
                name="environment"
                label="Production"
                description="Deploy to the live environment."
                checked={environment === 'production'}
                onChange={() => setEnvironment('production')}
              />
              <Radio
                name="environment"
                label="Staging"
                description="Ship to the preview environment first."
                checked={environment === 'staging'}
                onChange={() => setEnvironment('staging')}
              />
            </ChoiceGroup>
            <div className="docs-live-panel">
              <div className="docs-live-row"><strong>Environment</strong><span>{environment}</span></div>
            </div>
          </div>
          <div className="sand-usage-grid">
            <div className="sand-usage-item"><h4>Description</h4><p>Radio buttons present mutually exclusive choices where only one option may be active.</p></div>
            <div className="sand-usage-item"><h4>When to Use</h4><p>Use radios when users must commit to one mode, destination, or state from a small list.</p></div>
            <div className="sand-usage-item"><h4>How to Use</h4><p>Keep the option count short and make the labels directly comparable.</p></div>
          </div>
          <CodeTabs
            tabs={[
              {
                name: 'React (TS)',
                code: `import { Radio } from '@sandurtech/sandui';

<Radio name="mode" label="Production" />
<Radio name="mode" label="Staging" />`,
              },
            ]}
          />
        </div>
      </section>

      <section id="switches" className="docs-section">
        <h2 className="section-title">Switches</h2>
        <div className="sand-comp-doc">
          <div className="sand-comp-name">Instant On or Off Controls</div>
          <div className="sand-preview-area sand-preview-area-stack sand-preview-area-form">
            <ChoiceGroup>
              <Switch
                label="Maintenance mode"
                description="Temporarily disable external write actions."
                checked={checks.maintenance}
                onChange={(event) => setChecks((current) => ({ ...current, maintenance: event.target.checked }))}
              />
            </ChoiceGroup>
            <div className="docs-live-panel">
              <div className="docs-live-row"><strong>Maintenance</strong><span>{checks.maintenance ? 'on' : 'off'}</span></div>
            </div>
          </div>
          <div className="sand-usage-grid">
            <div className="sand-usage-item"><h4>Description</h4><p>Switches represent an immediate system state that toggles between on and off.</p></div>
            <div className="sand-usage-item"><h4>When to Use</h4><p>Use switches for immediate preferences or system controls that do not require form submission.</p></div>
            <div className="sand-usage-item"><h4>How to Use</h4><p>Phrase the label so the enabled state reads naturally, for example “Maintenance mode”.</p></div>
          </div>
          <CodeTabs
            tabs={[
              {
                name: 'React (TS)',
                code: `import { Switch } from '@sandurtech/sandui';

<Switch label="Maintenance mode" />`,
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};
