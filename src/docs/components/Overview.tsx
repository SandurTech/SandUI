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
        <div className="docs-install-card">
          <div className="docs-install-header">
            <span className="material-symbols-rounded" aria-hidden="true">package_2</span>
            <span>Install the package</span>
          </div>
          <code className="docs-install-command">npm i @sandurtech/sandui</code>
        </div>
      </div>
    </section>

    <section id="microservice-layout" className="docs-section">
      <h2 className="section-title">Sand UI in SandurTech Microservices</h2>
      <div className="sand-comp-doc">
        <div className="sand-comp-name">Microservice Layout Example</div>
        <p className="sand-comp-desc">The typical layout for a SandurTech utility consists of a header, a configuration panel, and a result panel.</p>

        <div className="sand-preview-area sand-preview-area-layout">
          <MicroserviceLayout
            header={
              <Header className="docs-demo-header">
                <div className="docs-demo-title">SandurTech Tool</div>
                <span className="material-symbols-rounded docs-accent-icon" aria-hidden="true">deployed_code</span>
              </Header>
            }
            panel={
              <ToolPanel className="docs-demo-panel">
                <InputGroup label="Config" groupClassName="docs-compact-input" />
                <Button variant="primary" className="docs-inline-button">
                  <span className="material-symbols-rounded" aria-hidden="true">play_arrow</span>
                  Action
                </Button>
              </ToolPanel>
            }
            result={
              <ResultPanel className="docs-demo-result">
                Output Area
              </ResultPanel>
            }
          />
        </div>
      </div>
    </section>
  </>
);
