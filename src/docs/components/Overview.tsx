import React from 'react';
import { Button, InputGroup, MicroserviceLayout, Header, ToolPanel, ResultPanel } from '../../components';

export const Overview: React.FC = () => (
  <>
    <section id="intro" className="docs-section">
      <h2 className="section-title">Overview</h2>
      <div className="sand-comp-doc">
        <p className="sand-comp-desc">
          Sand UI is a purpose-built component system for <strong>SandurTech</strong> tools. It focuses on a monochromatic primary identity with a high-visibility accent system.
        </p>
      </div>
    </section>

    <section id="microservice-layout" className="docs-section">
      <h2 className="section-title">Sand UI in SandurTech Microservices</h2>
      <div className="sand-comp-doc">
        <div className="sand-comp-name">Microservice Layout Example</div>
        <p className="sand-comp-desc">The typical layout for a SandurTech utility consists of a header, a configuration panel, and a result panel.</p>

        <div className="sand-preview-area" style={{ background: 'var(--theme-bg)', display: 'block', padding: '1.5rem' }}>
          <MicroserviceLayout
            header={
              <Header style={{ borderRadius: 'var(--radius-md) var(--radius-md) 0 0', marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>SandurTech Tool</div>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--sand-accent)' }}></div>
              </Header>
            }
            panel={
              <ToolPanel style={{ padding: '1.5rem', gap: '1rem' }}>
                <InputGroup label="Config" style={{ padding: '0.6rem', fontSize: '0.8rem' }} />
                <Button variant="primary" style={{ padding: '0.6rem', fontSize: '0.8rem' }}>Action</Button>
              </ToolPanel>
            }
            result={
              <ResultPanel style={{ minHeight: '200px', fontSize: '0.8rem' }}>
                Output Area
              </ResultPanel>
            }
          />
        </div>
      </div>
    </section>
  </>
);
