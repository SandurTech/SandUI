import React from 'react';

export const DesignTokens: React.FC = () => (
  <section id="tokens" className="docs-section">
    <h2 className="section-title">Design Tokens</h2>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Core Colors</h3>
      <p className="sand-comp-desc">Strictly derived from the SandurTech brand palette.</p>
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

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Derived Semantic Tokens</h3>
      <div className="token-grid">
        <div className="token-card">
          <div className="token-color" style={{ background: 'rgba(255, 165, 0, 0.16)' }}></div>
          <span className="token-label">Accent Muted</span>
          <span className="token-value">--sand-accent-muted</span>
        </div>
        <div className="token-card">
          <div className="token-color" style={{ background: 'rgba(38, 38, 38, 0.16)' }}></div>
          <span className="token-label">Primary Muted</span>
          <span className="token-value">--theme-border</span>
        </div>
        <div className="token-card">
          <div className="token-color" style={{ background: '#e6e6e6', border: '1px solid #dcdcdc' }}></div>
          <span className="token-label">Secondary Dark</span>
          <span className="token-value">--theme-surface-variant</span>
        </div>
      </div>
    </div>
  </section>
);
