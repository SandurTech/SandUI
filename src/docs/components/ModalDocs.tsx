import React, { useState } from 'react';
import { Button, Card, CodeTabs, InputGroup, Modal, Badge } from '../../components';

export const ModalDocs: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="modals" className="docs-section">
      <h2 className="section-title">Modal Dialogs</h2>

      <div className="sand-comp-doc">
        <div className="sand-comp-name">Interactive Dialog</div>
        <div className="sand-preview-area sand-preview-area-stack">
          <div className="docs-live-panel">
            <div className="docs-live-row">
              <strong>Status</strong>
              <Badge variant="success">Ready to publish</Badge>
            </div>
            <p className="docs-body-copy">
              Open the modal to review content, change metadata, and confirm a publish action with standard SandUI controls.
            </p>
          </div>
          <Button variant="primary" className="docs-inline-button" onClick={() => setOpen(true)}>
            <span className="material-symbols-rounded" aria-hidden="true">open_in_new</span>
            Open modal demo
          </Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Publish SandUI release"
            description="Review the final details before you publish the next documentation release."
            footer={
              <>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="success" onClick={() => setOpen(false)}>
                  <span className="material-symbols-rounded" aria-hidden="true">rocket_launch</span>
                  Publish
                </Button>
              </>
            }
          >
            <div className="docs-modal-stack">
              <InputGroup label="Release title" defaultValue="SandUI v0.3.0" />
              <InputGroup label="Summary" defaultValue="Adds navigation, feedback, and selection primitives." />
              <Card
                header="Included components"
                footer={<Badge variant="primary">6 additions</Badge>}
              >
                <p className="docs-body-copy">Checkboxes, radios, switches, breadcrumbs, pagination, toast, snackbar, and modal dialogs are included in this release.</p>
              </Card>
            </div>
          </Modal>
        </div>
        <div className="sand-usage-grid">
          <div className="sand-usage-item"><h4>Description</h4><p>Modal dialogs interrupt the current flow to focus attention on a contained task or confirmation.</p></div>
          <div className="sand-usage-item"><h4>When to Use</h4><p>Use a modal for short, high-attention tasks like review, confirmation, or lightweight editing.</p></div>
          <div className="sand-usage-item"><h4>How to Use</h4><p>Include a clear title, a concise description, and an explicit way to cancel or complete the action.</p></div>
        </div>
        <CodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { Modal, Button } from '@sandurtech/sandui';

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Publish release"
  footer={<Button variant="success">Publish</Button>}
>
  Modal content
</Modal>`,
            },
          ]}
        />
      </div>
    </section>
  );
};
