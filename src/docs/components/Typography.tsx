import React from 'react';
import { SandCode, SandText, SandTitle } from '../../components';

export const Typography: React.FC = () => (
  <section id="typography" className="docs-section">
    <h2 className="section-title">Typography</h2>
    <div className="sand-comp-doc">
      <p className="sand-comp-desc">Typography now ships as components with semantic heading levels, muted body styles, and inline code formatting.</p>
      <div className="sand-preview-area sand-preview-area-stack sand-preview-area-copy">
        <SandTitle level={1} size="display" gradient>Heading One</SandTitle>
        <SandTitle level={2} size="xl">Heading Two</SandTitle>
        <SandTitle level={3} size="md">Section Heading</SandTitle>
        <SandText size="lg">Digital elegance and performance. Handcrafted tools for modern product teams.</SandText>
        <SandText muted>Secondary copy supports instructions, validation help, and metadata around core actions.</SandText>
        <SandCode>const brand = 'SandurTech';</SandCode>
      </div>
    </div>
  </section>
);
