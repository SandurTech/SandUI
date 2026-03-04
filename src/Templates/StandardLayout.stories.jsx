import React from 'react';
import SandNavbar from '../Navbar/Navbar';
import SandSidebar from '../Sidebar/Sidebar';
import SandFooter from '../Footer/Footer';
import SandButton from '../Button/Button';
import SandCard from '../Card/Card';
import SandIcon from '../Icon/Icon';
import SandLink from '../Link/Link';

export default {
  title: '05. Templates/StandardLayout',
  parameters: { layout: 'fullscreen' },
};

export const Default = {
  name: 'StandardLayout',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--theme-bg)' }}>
      <SandNavbar title="SandurTech">
        <SandLink href="#">Products</SandLink>
        <SandLink href="#">Docs</SandLink>
        <SandButton variant="primary"><SandIcon name="login" size={16} /> Sign In</SandButton>
      </SandNavbar>

      <div style={{ display: 'flex', flex: 1 }}>
        <SandSidebar items={[
          { icon: 'dashboard', label: 'Dashboard', active: true },
          { icon: 'bar_chart', label: 'Analytics' },
          { icon: 'settings', label: 'Settings' },
        ]} />

        <main style={{ flex: 1, padding: '32px', maxWidth: '960px' }}>
          <h1 style={{ color: 'var(--theme-text)', fontFamily: 'Outfit, sans-serif', fontSize: '28px', marginBottom: '8px' }}>
            Dashboard
          </h1>
          <p style={{ color: 'var(--theme-text-muted)', marginBottom: '24px', fontSize: '14px' }}>
            Welcome back. Here is an overview of your projects.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            <SandCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <SandIcon name="code" size={20} style={{ color: 'var(--sandui-accent)' }} />
                <h3 style={{ color: 'var(--theme-text)', margin: 0 }}>SandUI</h3>
              </div>
              <p style={{ color: 'var(--theme-text-muted)', fontSize: '14px' }}>Design system library</p>
            </SandCard>
            <SandCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <SandIcon name="qr_code" size={20} style={{ color: 'var(--sandui-accent)' }} />
                <h3 style={{ color: 'var(--theme-text)', margin: 0 }}>Bulk Barcode</h3>
              </div>
              <p style={{ color: 'var(--theme-text-muted)', fontSize: '14px' }}>Barcode generation tool</p>
            </SandCard>
          </div>
        </main>
      </div>

      <SandFooter brandLogo="/SandurTech-Logo-SVG.svg" />
    </div>
  ),
};
