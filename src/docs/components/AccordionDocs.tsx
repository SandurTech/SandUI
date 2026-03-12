import React from 'react';
import { SandAccordion, SandCodeTabs } from '../../components';

export const AccordionDocs: React.FC = () => (
  <section id="accordion" className="docs-section">
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SandAccordion",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "description": "A high-performance Accessible React Component for rendering collapsible content sections with WAI-ARIA compliant keyboard navigation.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      })}
    </script>
    <h2 className="section-title">Accordion</h2>
    
    <div className="sand-comp-doc">
      <p className="sand-comp-desc">
        SandAccordion is an Accessible React Component built for high-performance React applications. 
        As part of the SandUI TypeScript UI Library, this component enables progressive disclosure of dense 
        information without sacrificing developer experience. It features semantic HTML tagging, built-in WAI-ARIA attributes, 
        and flawless keyboard navigation for ultimate accessibility. Whether you are building complex SaaS settings panels, 
        intricate data dashboards, or simple FAQ sections, the SandAccordion provides a reliable, animated, and strongly 
        typed solution that integrates seamlessly into any modern frontend architecture.
      </p>
    </div>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Basic Accordion</h3>
      <div className="sand-preview-area sand-preview-area-stack">
        <SandAccordion
          defaultOpen="release"
          items={[
            { id: 'release', title: 'Release checklist', content: 'Confirm tests, docs, and package metadata before publish.' },
            { id: 'deploy', title: 'Deployment checklist', content: 'Build docs with npm run build:docs before pushing to GitHub Pages.' },
          ]}
        />
      </div>
      <SandCodeTabs tabs={[{ name: 'React (TS)', code: `import { SandAccordion } from '@sandurtech/sandui';\n\n<SandAccordion items={[{ id: '1', title: 'Q', content: 'A' }]} />` }]} />
    </div>

    <div className="sand-comp-doc">
      <h3 className="sand-comp-name">Icon & Description Variation</h3>
      <div className="sand-preview-area sand-preview-area-stack">
        <SandAccordion
          defaultOpen="config"
          items={[
            { 
              id: 'config', 
              title: 'Project Configuration', 
              description: 'Adjust global project settings and metadata.',
              icon: 'settings', 
              content: 'Configure your project endpoints, environment variables, and build settings.' 
            },
            { 
              id: 'security', 
              title: 'Security & Access', 
              description: 'Manage user permissions and API credentials.',
              icon: 'security', 
              content: 'Set up OAuth providers, manage team roles, and rotate API keys.' 
            },
            { 
              id: 'history', 
              title: 'Activity History', 
              description: 'Review recent changes and deployment logs.',
              icon: 'history', 
              content: 'View a detailed audit trail of all actions performed in this workspace.' 
            },
          ]}
        />
      </div>
      <div className="sand-usage-grid">
        <div className="sand-usage-item"><h4>Description</h4><p>Accordions with leading icons and descriptions provide rich context for complex settings.</p></div>
        <div className="sand-usage-item"><h4>How to Use</h4><p>Pass <code>icon</code> and <code>description</code> properties to each item in the <code>items</code> array.</p></div>
      </div>
      <SandCodeTabs tabs={[{ name: 'React (TS)', code: `<SandAccordion\n  items={[\n    { \n      id: '1', \n      title: 'Settings', \n      description: 'Global app config', \n      icon: 'settings', \n      content: '...' \n    },\n  ]}\n/>` }]} />
    </div>
  </section>
);
