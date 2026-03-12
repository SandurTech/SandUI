import React from 'react';

export const Overview: React.FC = () => (
  <section id="intro" className="docs-section">
    <h2 className="section-title">Introduction</h2>
    <div className="sand-comp-doc">
      <p className="sand-comp-desc">
        Sand UI is a purpose-built component system for <strong>SandurTech</strong> tools. It focuses on a monochromatic primary identity with a high-visibility accent system.
      </p>
      <div className="docs-install-card">
        <div className="docs-install-header">
          <span className="material-symbols-rounded" aria-hidden="true">package_2</span>
          <span>Install the package</span>
        </div>
        <code className="docs-install-command">npm i @sandurtech/sandui</code>
      </div>
    </div>
  </section>
);
