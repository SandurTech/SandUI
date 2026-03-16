import React from 'react';
import {
  SandBox,
  SandCodeTabs,
  SandContainer,
  SandGrid,
  SandHeader,
  SandIcon,
  SandAppLayout,
  SandMicroserviceLayout,
  SandResultPanel,
  SandStack,
  SandText,
  SandThemeProvider,
  SandTitle,
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
          items={[
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
          items={[
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
          items={[
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
        <SandCodeTabs items={[{ name: 'React (TS)', code: `import { SandContainer } from '@sandurtech/sandui';\n\n<SandContainer>Page content</SandContainer>` }]} />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">App Layout</h3>
        <p className="sand-comp-desc">
          Generic structural elements to build application shells, admin dashboards, and IDE-like interfaces.
        </p>
        <div className="sand-preview-area sand-preview-area-stack">
          <div style={{ border: '1px solid var(--theme-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
            <SandHeader style={{ padding: 'var(--sand-space-3)', background: 'var(--theme-surface-variant)' }}>
              <strong>Application Header</strong>
            </SandHeader>
            <SandAppLayout style={{ flex: 1 }}>
              <SandAppLayout.Sidebar style={{ padding: 'var(--sand-space-3)', borderRight: '1px solid var(--theme-border)', minWidth: '160px' }}>
                Sidebar / Navigation
              </SandAppLayout.Sidebar>
              <SandAppLayout.Main style={{ padding: 'var(--sand-space-3)', flex: 1, borderLeft: '1px solid var(--theme-border)' }}>
                Main Content Area
              </SandAppLayout.Main>
            </SandAppLayout>
          </div>
        </div>
        <div className="sand-usage-grid">
          <div className="sand-usage-item"><h4>SandHeader</h4><p>Top-level header for global navigation.</p></div>
          <div className="sand-usage-item"><h4>SandAppLayout</h4><p>Container managing the relationship between sidebar and main content.</p></div>
          <div className="sand-usage-item"><h4>SandAppLayout.Sidebar & Main</h4><p>Semantic regions for navigation and primary content.</p></div>
        </div>
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import {
  SandHeader,
  SandAppLayout
} from '@sandurtech/sandui';

<div className="app-root">
  <SandHeader>...</SandHeader>
  <SandAppLayout>
    <SandAppLayout.Sidebar>...</SandAppLayout.Sidebar>
    <SandAppLayout.Main>...</SandAppLayout.Main>
  </SandAppLayout>
</div>`,
            },
          ]}
        />
      </div>

      <div className="sand-comp-doc">
        <h3 className="sand-comp-name">Microservice Layout</h3>
        <p className="sand-comp-desc">
          A high-performance layout pattern for SaaS platforms and microservices, featuring a sticky sidebar and flexible content area.
        </p>
        <div className="sand-preview-area">
          <div style={{ border: '1px solid var(--theme-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '300px', display: 'flex', background: 'var(--theme-surface)' }}>
            <SandMicroserviceLayout>
              <SandMicroserviceLayout.Sidebar style={{ padding: 'var(--sand-space-4)', borderRight: '1px solid var(--theme-border)', width: '120px' }}>
                <SandText size="sm">Sidebar</SandText>
              </SandMicroserviceLayout.Sidebar>
              <SandMicroserviceLayout.Content>
                <SandHeader style={{ padding: 'var(--sand-space-3)', borderBottom: '1px solid var(--theme-border)' }}>
                  <SandText size="sm" style={{ fontWeight: 600 }}>Service Header</SandText>
                </SandHeader>
                <SandMicroserviceLayout.Main style={{ padding: 'var(--sand-space-4)' }}>
                  <SandText size="sm">Main Content Area</SandText>
                </SandMicroserviceLayout.Main>
              </SandMicroserviceLayout.Content>
            </SandMicroserviceLayout>
          </div>
        </div>
        <SandCodeTabs
          items={[
            {
              name: 'React (TS)',
              code: `import { SandMicroserviceLayout } from '@sandurtech/sandui';

<SandMicroserviceLayout>
  <SandMicroserviceLayout.Sidebar>
    {/* Navigation / Service Switcher */}
  </SandMicroserviceLayout.Sidebar>
  <SandMicroserviceLayout.Content>
    <SandHeader>...</SandHeader>
    <SandMicroserviceLayout.Main>
      {/* Route Content */}
    </SandMicroserviceLayout.Main>
  </SandMicroserviceLayout.Content>
</SandMicroserviceLayout>`,
            },
          ]}
        />
      </div>
    </section>
  </>
);
