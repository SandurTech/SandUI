import React from 'react';

export const Typography: React.FC = () => (
  <section id="typography" className="docs-section">
    <h2 className="section-title">Typography</h2>
    <div className="sand-comp-doc">
      <p className="sand-comp-desc">Headings use 'Outfit' for a modern feel, while body text uses 'Inter' for clarity.</p>
      <div className="sand-preview-area" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-2px' }}>Heading One</h1>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-1px' }}>Heading Two</h2>
        <p style={{ fontSize: '1.05rem', maxWidth: '650px' }}>Digital elegance and performance. Handcrafted niche tools designed for the future of the web.</p>
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', background: 'var(--theme-surface-variant)', padding: '0.4rem 0.8rem', borderRadius: '6px' }}>const brand = 'SandurTech';</code>
      </div>
    </div>
  </section>
);
