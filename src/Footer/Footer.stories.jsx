import React from 'react';
import SandFooter from './Footer';

export default {
  title: '04. Organisms/SandFooter',
  component: SandFooter,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export const Default = {
  render: () => <SandFooter brandLogo="/SandurTech-Logo-SVG.svg" />,
};

export const Active = {
  render: () => <SandFooter brandLogo="/SandurTech-Logo-SVG.svg" className="active" />,
};

export const Disabled = {
  render: () => (
    <div style={{ opacity: 0.5, pointerEvents: 'none' }}>
      <SandFooter brandLogo="/SandurTech-Logo-SVG.svg" />
    </div>
  ),
};

export const CustomLinks = {
  name: 'Custom Content',
  render: () => (
    <SandFooter
      brandLogo="/SandurTech-Logo-SVG.svg"
      navLinks={[
        { label: 'SandUI Docs', href: '#' },
        { label: 'Bulk Barcode', href: 'https://bulk-barcode-generator.vercel.app/' },
        { label: 'QuickCalc', href: '#' },
      ]}
      supportLinks={[
        { label: 'GitHub', href: 'https://github.com/amogharajsandur' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amogharajsandur/' },
      ]}
    />
  ),
};
