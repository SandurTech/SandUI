import React from 'react';

export const DesignTokens: React.FC = () => (
  <section id="tokens" className="docs-section">
    <h2 className="section-title">Design Tokens</h2>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Core Colors</h3>
      <div className="token-grid">
        <div className="token-card">
          <div className="token-color" style={{ background: 'orange' }}></div>
          <span className="token-label">Accent</span>
          <span className="token-value">orange (--sand-accent)</span>
        </div>
        <div className="token-card">
          <div className="token-color" style={{ background: '#262626' }}></div>
          <span className="token-label">Primary</span>
          <span className="token-value">#262626 (--sand-primary)</span>
        </div>
        <div className="token-card">
          <div className="token-color" style={{ background: '#F2F2F2', border: '1px solid #e6e6e6' }}></div>
          <span className="token-label">Secondary</span>
          <span className="token-value">#F2F2F2 (--sand-secondary)</span>
        </div>
      </div>
    </div>
  </section>
);
