import React from 'react';
import { SandCodeTabs, SandTable } from '../../components';

export const TableDocs: React.FC = () => (
  <section id="table" className="docs-section">
    <h2 className="section-title">Table</h2>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">SandTable</h3>
      <div className="sand-preview-area sand-preview-area-stack">
        <SandTable striped stickyHeader>
          <thead>
            <tr>
              <th>Service</th>
              <th>Status</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Docs</td><td>Healthy</td><td>0.0.1</td></tr>
            <tr><td>Registry</td><td>Ready</td><td>0.0.1</td></tr>
            <tr><td>Analytics</td><td>Active</td><td>1.2.0</td></tr>
          </tbody>
        </SandTable>
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Tables display sets of data across rows and columns.</p></div>
        <div className="sand-usage-item"><h4>When to Use</h4><p>Use for structured data sets, logs, or resource lists.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Use <code>SandTable</code> with standard <code>thead</code> and <code>tbody</code> children.</p></div>
      </div>
      <SandCodeTabs tabs={[{ name: 'React (TS)', code: `import { SandTable } from '@sandurtech/sandui';\n\n<SandTable striped stickyHeader>\n  <thead>\n    <tr><th>Header</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Data</td></tr>\n  </tbody>\n</SandTable>` }]} />
    </div>
  </section>
);
