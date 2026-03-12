import React from 'react';
import {
  SandBox,
  SandCodeTabs,
  SandContainer,
  SandGrid,
  SandHeader,
  SandIcon,
  SandResultPanel,
  SandStack,
  SandText,
  SandThemeProvider,
  SandTitle,
  SandToolLayout,
  SandToolPanel,
} from '../../components';

export const LayoutDocs: React.FC = () => (
  <>
    <section id="layout" className="docs-section">
      <h2 className="section-title">Layout & Theme</h2>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">Theme Provider</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <SandThemeProvider tokens={{ accent: 'orange' }}>
            <SandBox surface padding="lg">
              <SandTitle level={3}>SandThemeProvider</SandTitle>
              <SandText size="sm">Wrap application surfaces to apply theme mode and override CSS token values.</SandText>
            </SandBox>
          </SandThemeProvider>
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandThemeProvider } from '@sandurtech/sandui';

<SandThemeProvider defaultTheme="dark">
  <App />
</SandThemeProvider>`,
            },
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandBox and SandStack</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <SandStack gap="md">
            <SandBox surface padding="md">Surface container with padding</SandBox>
            <SandStack direction="row" gap="md">
              <SandBox surface padding="md">Row item one</SandBox>
              <SandBox surface padding="md">Row item two</SandBox>
            </SandStack>
          </SandStack>
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandBox, SandStack } from '@sandurtech/sandui';

<SandStack gap="lg">
  <SandBox surface padding="md">A</SandBox>
  <SandBox surface padding="md">B</SandBox>
</SandStack>`,
            },
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandGrid and SandIcon</h3>
        <div className="sand-preview-area sand-preview-area-stack">
          <SandGrid columns={{ sm: 1, md: 3 }} gap="md">
            <SandGrid.Item>
              <SandBox surface padding="md">
                <SandIcon icon="monitoring" />
                <SandText size="sm">Metrics</SandText>
              </SandBox>
            </SandGrid.Item>
            <SandGrid.Item>
              <SandBox surface padding="md">
                <SandIcon icon="notifications_active" />
                <SandText size="sm">Alerts</SandText>
              </SandBox>
            </SandGrid.Item>
            <SandGrid.Item>
              <SandBox surface padding="md">
                <SandIcon icon="local_fire_department" />
                <SandText size="sm">Activity</SandText>
              </SandBox>
            </SandGrid.Item>
          </SandGrid>
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import { SandGrid, SandIcon } from '@sandurtech/sandui';

<SandGrid columns={{ md: 3 }}>
  <SandGrid.Item span={{ md: 2 }}>
    <SandIcon icon="monitoring" />
  </SandGrid.Item>
</SandGrid>`,
            },
          ]}
        />
      </div>
    </section>

    <section id="shell" className="docs-section">
      <h2 className="section-title">App Shell & Containers</h2>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">SandContainer</h3>
        <div className="sand-preview-area">
          <SandContainer style={{ border: '1px dashed var(--theme-border)', padding: 'var(--sand-space-4)' }}>
            Max-width container for page content.
          </SandContainer>
        </div>
        <SandCodeTabs tabs={[{ name: 'React (TS)', code: `import { SandContainer } from '@sandurtech/sandui';\n\n<SandContainer>Page content</SandContainer>` }]} />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">Tool Layout</h3>
        <p className="sand-comp-desc">
          Composable structural elements to build complex application shells, admin dashboards, and IDE-like interfaces.
        </p>
        <div className="sand-preview-area sand-preview-area-stack">
          <div style={{ border: '1px solid var(--theme-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
            <SandHeader style={{ padding: 'var(--sand-space-3)', background: 'var(--theme-surface-variant)' }}>
              <strong>Application Header</strong>
            </SandHeader>
            <SandToolLayout style={{ flex: 1 }}>
              <SandToolPanel style={{ padding: 'var(--sand-space-3)', borderRight: '1px solid var(--theme-border)', minWidth: '160px' }}>
                Side Panel / Controls
              </SandToolPanel>
              <SandResultPanel style={{ padding: 'var(--sand-space-3)', flex: 1, borderLeft: '1px solid var(--theme-border)' }}>
                Main Content / Result Area
              </SandResultPanel>
            </SandToolLayout>
          </div>
        </div>
        <div className="sand-usage-grid">
          <div className="sand-usage-item"><h4>SandHeader</h4><p>Top-level navigation or toolbar container for an application layout.</p></div>
          <div className="sand-usage-item"><h4>SandToolLayout</h4><p>A flex container that manages the horizontal relationship between side panels and main content.</p></div>
          <div className="sand-usage-item"><h4>SandToolPanel & SandResultPanel</h4><p>Semantic regions for configuration sidebars and the primary output area.</p></div>
        </div>
        <SandCodeTabs
          tabs={[
            {
              name: 'React (TS)',
              code: `import {
  SandHeader,
  SandToolLayout,
  SandToolPanel,
  SandResultPanel
} from '@sandurtech/sandui';

<div className="app-root">
  <SandHeader>...</SandHeader>
  <SandToolLayout>
    <SandToolPanel>...</SandToolPanel>
    <SandResultPanel>...</SandResultPanel>
  </SandToolLayout>
</div>`,
            },
          ]}
        />
      </div>
    </section>
  </>
);
