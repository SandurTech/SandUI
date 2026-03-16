import React, { useState } from 'react';
import { 
  SandButton, 
  SandCodeTabs, 
  SandDrawer, 
  SandNavbar, 
  SandTooltip, 
  SandPopover, 
  SandStack, 
  SandText 
} from '../../components';

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
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import { SandNavbar } from '@sandurtech/sandui';\n\n<SandNavbar brand=\"MyApp\" items={[{ label: 'Home', href: '/', active: true }]} onMenuClick={() => setOpen(true)} />`,
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
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#">Dashboard</a>
              <a href="#">Analytics</a>
              <a href="#">Settings</a>
            </div>
          </SandDrawer>
        </div>
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import { SandDrawer } from '@sandurtech/sandui';\n\n<SandDrawer open={open} title=\"Menu\" onClose={() => setOpen(false)}>\n  <nav>...</nav>\n</SandDrawer>`,
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
          items={[
            {
              name: 'React (TS)',
              code: `import { SandTooltip, SandButton } from '@sandurtech/sandui';\n\n<SandTooltip content=\"Helpful info\">\n  <SandButton>Hover Me</SandButton>\n</SandTooltip>`,
            },
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandPopover</h3>
        <p className="sand-comp-desc">An anchored, non-modal overlay for displaying rich content.</p>
        <div className="sand-preview-area">
          <SandPopover>
            <SandPopover.Trigger>
              <SandButton variant="outline">Toggle Popover</SandButton>
            </SandPopover.Trigger>
            <SandPopover.Content>
              <SandStack gap="sm">
                <SandText size="sm" weight={600}>Popover Content</SandText>
                <SandText size="sm">This is a non-modal anchored overlay that supports focus trapping and custom positioning.</SandText>
                <SandButton size="sm">Action</SandButton>
              </SandStack>
            </SandPopover.Content>
          </SandPopover>
        </div>
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import { SandPopover } from '@sandurtech/sandui';\n\n<SandPopover>\n  <SandPopover.Trigger>\n    <button>Open</button>\n  </SandPopover.Trigger>\n  <SandPopover.Content>\n    Rich content goes here...\n  </SandPopover.Content>\n</SandPopover>`,
            },
          ]}
        />
      </div>
    </section>
  );
};
