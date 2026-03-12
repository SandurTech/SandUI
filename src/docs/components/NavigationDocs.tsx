import React, { useState } from 'react';
import { SandBreadcrumbs, SandCodeTabs, SandPagination } from '../../components';

export const NavigationDocs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;

  return (
    <>
      <section id="breadcrumbs" className="docs-section">
        <h2 className="section-title">Breadcrumbs</h2>
        <div className="sand-comp-doc">
          <h3 className="sand-comp-name">Hierarchy and Location</h3>
          <div className="sand-preview-area sand-preview-area-stack">
            <SandBreadcrumbs
              items={[
                { label: 'Home', href: '#' },
                { label: 'Components', href: '#cards' },
                { label: `Page ${currentPage}` },
              ]}
            />
          </div>
          <div className="sand-usage-grid">
            <div className="sand-usage-item"><h4>Description</h4><p>Breadcrumbs show a user’s current location in a hierarchy and provide quick backtracking.</p></div>
            <div className="sand-usage-item"><h4>When to Use</h4><p>Use them in documentation flows, dashboards, or nested tools where context matters.</p></div>
            <div className="sand-usage-item"><h4>How to Use</h4><p>Only include meaningful levels and keep the current page as the final non-link item.</p></div>
          </div>
          <SandCodeTabs
            tabs={[
              {
                name: 'React (TS)',
                code: `import { SandBreadcrumbs } from '@sandurtech/sandui';

<SandBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Library' }]} />`,
              },
            ]}
          />
        </div>
      </section>

      <section id="pagination" className="docs-section">
        <h2 className="section-title">Pagination</h2>
        <div className="sand-comp-doc">
          <h3 className="sand-comp-name">Paged Result Navigation</h3>
          <div className="sand-preview-area sand-preview-area-stack">
            <SandPagination currentPage={currentPage} totalPages={totalPages} />
            <div className="docs-segmented-actions" role="group" aria-label="Pagination demo controls">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`docs-segmented-btn ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  Show page {page}
                </button>
              ))}
            </div>
            <div className="docs-live-panel">
              <div className="docs-live-row"><strong>Current page</strong><span>{currentPage} of {totalPages}</span></div>
            </div>
          </div>
          <div className="sand-usage-grid">
            <div className="sand-usage-item"><h4>Description</h4><p>Pagination breaks long result sets into stable, predictable chunks.</p></div>
            <div className="sand-usage-item"><h4>When to Use</h4><p>Use it when a list is too long for a single page and users need direct page access.</p></div>
            <div className="sand-usage-item"><h4>How to Use</h4><p>Keep the current page visually distinct and pair previous and next controls with page numbers.</p></div>
          </div>
          <SandCodeTabs
            tabs={[
              {
                name: 'React (TS)',
                code: `import { SandPagination } from '@sandurtech/sandui';

<SandPagination currentPage={3} totalPages={8} />`,
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};
