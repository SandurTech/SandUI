import React, { useState } from 'react';
import { Button, CodeTabs, Snackbar, Toast } from '../../components';

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

export const FeedbackDocs: React.FC = () => {
  const [mode, setMode] = useState<FeedbackMode>('success');
  const current = feedbackConfig[mode];

  return (
    <>
      <section id="toast" className="docs-section">
        <h2 className="section-title">Toast</h2>

        <div className="sand-comp-doc">
          <div className="sand-comp-name">Richer Status Confirmation</div>
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
            <Toast
              variant={mode}
              heading={current.title}
              message={current.message}
              action={
                <Button variant="outline" className="docs-inline-button">
                  <span className="material-symbols-rounded" aria-hidden="true">open_in_new</span>
                  View site
                </Button>
              }
            />
          </div>
          <div className="sand-usage-grid">
            <div className="sand-usage-item"><h4>Description</h4><p>Toasts deliver a compact but expressive confirmation with title, body copy, and optional action.</p></div>
            <div className="sand-usage-item"><h4>When to Use</h4><p>Use toasts for async completion states, publish results, save confirmations, and actionable system notices.</p></div>
            <div className="sand-usage-item"><h4>How to Use</h4><p>Lead with the outcome, keep the body concise, and only add one action when it changes the next step.</p></div>
          </div>
          <CodeTabs
            tabs={[
              {
                name: 'React (TS)',
                code: `import { Toast } from '@sandurtech/sandui';

<Toast variant="success" heading="Saved" message="Your changes are live." />`,
              },
            ]}
          />
        </div>
      </section>

      <section id="snackbar" className="docs-section">
        <h2 className="section-title">Snackbar</h2>

        <div className="sand-comp-doc">
          <div className="sand-comp-name">Lightweight Inline Notification</div>
          <div className="sand-preview-area sand-preview-area-stack">
            <div className="docs-segmented-actions" role="group" aria-label="Snackbar demo variants">
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
            <Snackbar
              variant={mode === 'failed' ? 'failed' : mode === 'success' ? 'success' : 'info'}
              message={
                mode === 'failed'
                  ? 'Review blocking issues before release.'
                  : mode === 'success'
                    ? 'Release is live and analytics are tracking.'
                    : 'Draft saved locally. Sync to publish changes.'
              }
              action={
                <Button variant={mode === 'failed' ? 'failed' : mode === 'success' ? 'success' : 'secondary'} className="docs-inline-button">
                  <span className="material-symbols-rounded" aria-hidden="true">
                    {mode === 'failed' ? 'error' : mode === 'success' ? 'check_circle' : 'sync'}
                  </span>
                  {mode === 'failed' ? 'Resolve issues' : mode === 'success' ? 'Open release' : 'Sync now'}
                </Button>
              }
            />
          </div>
          <div className="sand-usage-grid">
            <div className="sand-usage-item"><h4>Description</h4><p>Snackbars surface short-lived state changes without taking over the page layout.</p></div>
            <div className="sand-usage-item"><h4>When to Use</h4><p>Use snackbars for quick updates, low-friction confirmations, or brief recovery prompts.</p></div>
            <div className="sand-usage-item"><h4>How to Use</h4><p>Keep the message short enough to read instantly and favor a single compact action.</p></div>
          </div>
          <CodeTabs
            tabs={[
              {
                name: 'React (TS)',
                code: `import { Snackbar } from '@sandurtech/sandui';

<Snackbar variant="info" message="Connection restored." />`,
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};
