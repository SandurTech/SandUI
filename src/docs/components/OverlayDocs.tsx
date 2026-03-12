import React, { useState } from 'react';
import { SandButton, SandCodeTabs, SandDrawer, SandNavbar, SandTooltip } from '../../components';

export const OverlayDocs: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="overlays" className="docs-section">
      <h2 className="section-title">Overlays & Shells</h2>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandNavbar</h3>
        <p className="sand-comp-desc">
          A responsive navigation header that supports branding, links, and a mobile menu trigger.
        </p>
        <div className="sand-preview-area">
          <SandNavbar
            brand="SandUI"
            items={[
              { label: 'Overview', href: '#', active: true },
              { label: 'Components', href: '#' },
              { label: 'Resources', href: '#' },
            ]}
            onMenuClick={() => setOpen(true)}
          />
        </div>
        <div className="sand-usage-grid u-mt-4">
          <div className="sand-usage-item">
            <h4>Best for</h4>
            <p>Global app headers and consistent site-wide navigation.</p>
          </div>
          <div className="sand-usage-item">
            <h4>Responsive</h4>
            <p>Automatically hides links and shows a menu trigger on smaller screens.</p>
          </div>
          <div className="sand-usage-item">
            <h4>Customizable</h4>
            <p>Accepts custom children for secondary actions like theme toggles.</p>
          </div>
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandNavbar } from '@sandurtech/sandui';

<SandNavbar
  brand="MyApp"
  items={[
    { label: 'Home', href: '/', active: true },
    { label: 'Docs', href: '/docs' }
  ]}
  onMenuClick={() => setDrawerOpen(true)}
/>`,
            },
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandDrawer</h3>
        <p className="sand-comp-desc">
          A slide-out panel often used for mobile navigation or supplemental content.
        </p>
        <div className="sand-preview-area">
          <SandButton onClick={() => setOpen(true)} variant="outline">
            <span className="material-symbols-rounded u-mr-2" aria-hidden="true">menu</span>
            Open Navigation Drawer
          </SandButton>
          
          <SandDrawer open={open} title="Navigation" onClose={() => setOpen(false)}>
            <a href="#">Dashboard</a>
            <a href="#">Analytics</a>
            <a href="#">Settings</a>
            <a href="#">Team</a>
          </SandDrawer>
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandDrawer } from '@sandurtech/sandui';

const [open, setOpen] = useState(false);

<SandDrawer 
  open={open} 
  title="Menu" 
  onClose={() => setOpen(false)}
>
  <nav>...</nav>
</SandDrawer>`,
            },
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandTooltip</h3>
        <p className="sand-comp-desc">
          A small popover that appears on hover or focus to provide contextual information.
        </p>
        <div className="sand-preview-area">
          <div style={{ display: 'flex', gap: '2rem' }}>
            <SandTooltip content="This action cannot be undone.">
              <SandButton variant="failed">Delete Project</SandButton>
            </SandTooltip>

            <SandTooltip content="Click to sync with remote.">
              <SandButton variant="secondary">
                <span className="material-symbols-rounded" aria-hidden="true">sync</span>
              </SandButton>
            </SandTooltip>
          </div>
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandTooltip, SandButton } from '@sandurtech/sandui';

<SandTooltip content="Helpful information">
  <SandButton>Hover Me</SandButton>
</SandTooltip>`,
            },
          ]}
        />
      </div>
    </section>
  );
};
