import React from 'react';

export const Typography: React.FC = () => (
  <section id="typography" className="docs-section">
    <h2 className="section-title">Typography</h2>
    <div className="sand-comp-doc">
      <p className="sand-comp-desc">Headings use 'Outfit' for a modern feel, while body text uses 'Inter' for clarity.</p>
      <div className="sand-preview-area sand-preview-area-stack sand-preview-area-copy">
        <h1 className="docs-display-lg">Heading One</h1>
        <h2 className="docs-display-md">Heading Two</h2>
        <h3 className="docs-display-sm">Section Heading</h3>
        <p className="docs-body-copy docs-body-copy-wide">Digital elegance and performance. Handcrafted niche tools designed for the future of the web.</p>
        <p className="docs-body-copy docs-body-copy-muted">Secondary copy supports instructions, validation help, and metadata around core actions.</p>
        <div className="docs-type-row">
          <span className="docs-kicker">Section label</span>
          <span className="docs-meta-copy">12px uppercase utility text</span>
        </div>
        <code className="docs-inline-code">const brand = 'SandurTech';</code>
      </div>
    </div>
  </section>
);
