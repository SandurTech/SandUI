import React, { useState } from 'react';
import { SandButton, SandCodeTabs, SandSnackbar, SandToast } from '../../components';

type FeedbackMode = 'success' | 'failed' | 'info';

const feedbackConfig = {
  success: {
    title: 'Deployment complete',
    message: 'The documentation site was published successfully.',
  },
  failed: {
    title: 'Validation failed',
    message: 'Two required content fields still need attention before publishing.',
  },
  info: {
    title: 'Draft saved',
    message: 'Changes are available locally and ready for sync.',
  },
};

export const NotificationDocs: React.FC = () => {
  const [mode, setMode] = useState<FeedbackMode>('success');
  const current = feedbackConfig[mode];

  return (
    <section id="notifications" className="docs-section">
      <h2 className="section-title">Notifications</h2>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandToast</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <div className="docs-segmented-actions" role="group" aria-label="Toast demo variants">
            {(['success', 'failed', 'info'] as const).map((variant) => (
              <button
                key={variant}
                type="button"
                className={`docs-segmented-btn ${mode === variant ? 'active' : ''}`}
                onClick={() => setMode(variant)}
              >
                {variant}
              </button>
            ))}
          </div>
          <SandToast
            variant={mode}
            heading={current.title}
            message={current.message}
            action={
              <SandButton variant="outline" className="docs-inline-button">
                <span className="material-symbols-rounded" aria-hidden="true">open_in_new</span>
                View site
              </SandButton>
            }
          />
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandToast } from '@sandurtech/sandui';\n\n<SandToast variant="success" heading="Saved" message="..." />`,
            },
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandSnackbar</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <SandSnackbar
            variant={mode === 'failed' ? 'failed' : mode === 'success' ? 'success' : 'info'}
            message={
              mode === 'failed'
                ? 'Review blocking issues before release.'
                : mode === 'success'
                  ? 'Release is live and analytics are tracking.'
                  : 'Draft saved locally. Sync to publish changes.'
            }
            action={
              <SandButton variant={mode === 'failed' ? 'failed' : mode === 'success' ? 'success' : 'secondary'} className="docs-inline-button">
                {mode === 'failed' ? 'Resolve' : mode === 'success' ? 'Open' : 'Sync'}
              </SandButton>
            }
          />
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandSnackbar } from '@sandurtech/sandui';\n\n<SandSnackbar variant="info" message="Connection restored." />`,
            },
          ]}
        />
      </div>
    </section>
  );
};
