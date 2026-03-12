import React, { useState } from 'react';
import { SandBadge, SandButton, SandCard, SandCodeTabs, SandInputGroup, SandModal } from '../../components';

export const ModalDocs: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="modals" className="docs-section">
      <h2 className="section-title">Modal Dialogs</h2>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">Interactive Dialog</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <div className="docs-live-panel">
            <div className="docs-live-row">
              <strong>Status</strong>
              <SandBadge variant="success">Ready to publish</SandBadge>
            </div>
            <p className="docs-body-copy">
              Open the modal to review content, change metadata, and confirm a publish action with standard SandUI controls.
            </p>
          </div>
          <SandButton variant="primary" className="docs-inline-button" onClick={() => setOpen(true)}>
            <span className="material-symbols-rounded" aria-hidden="true">open_in_new</span>
            Open modal demo
          </SandButton>
          <SandModal
            open={open}
            onClose={() => setOpen(false)}
            title="Publish SandUI release"
            description="Review the final details before you publish the next documentation release."
            footer={
              <>
                <SandButton variant="outline" onClick={() => setOpen(false)}>Cancel</SandButton>
                <SandButton variant="success" onClick={() => setOpen(false)}>
                  <span className="material-symbols-rounded" aria-hidden="true">rocket_launch</span>
                  Publish
                </SandButton>
              </>
            }
          >
            <div className="docs-modal-stack">
              <SandInputGroup label="Release title" defaultValue="SandUI v0.3.0" />
              <SandInputGroup label="Summary" defaultValue="Adds navigation, feedback, and selection primitives." />
              <SandCard
                header="Included components"
                footer={<SandBadge variant="primary">6 additions</SandBadge>}
              >
                <p className="docs-body-copy">Checkboxes, radios, switches, breadcrumbs, pagination, toast, snackbar, and modal dialogs are included in this release.</p>
              </SandCard>
            </div>
          </SandModal>
        </div>
        <div className="sand-usage-grid">
          <div className="sand-usage-item"><h4>Description</h4><p>Modal dialogs interrupt the current flow to focus attention on a contained task or confirmation.</p></div>
          <div className="sand-usage-item"><h4>When to Use</h4><p>Use a modal for short, high-attention tasks like review, confirmation, or lightweight editing.</p></div>
          <div className="sand-usage-item"><h4>How to Use</h4><p>Include a clear title, a concise description, and an explicit way to cancel or complete the action.</p></div>
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandModal, SandButton } from '@sandurtech/sandui';

<SandModal
  open={open}
  onClose={() => setOpen(false)}
  title="Publish release"
  footer={<SandButton variant="success">Publish</SandButton>}
>
  Modal content
</SandModal>`,
            },
          ]}
        />
      </div>
    </section>
  );
};
