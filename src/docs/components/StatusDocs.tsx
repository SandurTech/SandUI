import React, { useState } from 'react';
import { SandAlert, SandCodeTabs, SandLoader, SandProgress, SandSkeleton } from '../../components';

export const StatusDocs: React.FC = () => {
  const [progress, setProgress] = useState(64);

  return (
    <section id="status" className="docs-section">
      <h2 className="section-title">Status & Progress</h2>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandAlert</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <SandAlert status="warning" title="Content review pending" description="Two release notes still need editorial approval." />
          <SandAlert status="info" title="Update available" description="A new version of SandUI is available for download." />
        </div>
        <SandCodeTabs tabs={[{ name: 'React (TS)', code: `import { SandAlert } from '@sandurtech/sandui';\n\n<SandAlert status="info" title="Title" description="Description" />` }]} />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandLoader & SandSkeleton</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <div className="docs-live-panel">
            <div className="docs-live-row"><strong>Loading</strong><SandLoader /></div>
            <SandSkeleton height={18} />
            <SandSkeleton height={18} width="72%" />
          </div>
        </div>
        <SandCodeTabs tabs={[{ name: 'React (TS)', code: `import { SandLoader, SandSkeleton } from '@sandurtech/sandui';\n\n<SandLoader />\n<SandSkeleton height={20} />` }]} />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandProgress</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <SandProgress value={progress} showValue />
          <div className="docs-segmented-actions" role="group" aria-label="Progress demo controls">
            {[24, 64, 100].map((value) => (
              <button
                key={value}
                type="button"
                className={`docs-segmented-btn ${progress === value ? 'active' : ''}`}
                onClick={() => setProgress(value)}
              >
                {value}%
              </button>
            ))}
          </div>
        </div>
        <SandCodeTabs tabs={[{ name: 'React (TS)', code: `import { SandProgress } from '@sandurtech/sandui';\n\n<SandProgress value={50} showValue />` }]} />
      </div>
    </section>
  );
};
