import React, { useEffect, useState } from 'react';
import './Docs.scss';

import { Overview } from './components/Overview';
import { DesignTokens } from './components/DesignTokens';
import { Typography } from './components/Typography';
import { KbdDocs } from './components/KbdDocs';
import { ButtonDocs } from './components/ButtonDocs';
import { InputDocs } from './components/InputDocs';
import { CardDocs } from './components/CardDocs';
import { SelectionDocs } from './components/SelectionDocs';
import { NavigationDocs } from './components/NavigationDocs';
import { FeedbackDocs } from './components/FeedbackDocs';
import { ModalDocs } from './components/ModalDocs';
import { UtilitiesDocs } from './components/UtilitiesDocs';

interface NavItem {
  href: string;
  label: string;
  icon: string;
  description: string;
  keywords: string[];
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: 'Introduction',
    items: [
      {
        href: '#intro',
        label: 'Overview',
        icon: 'home_app_logo',
        description: 'Project summary, package install, and design system purpose.',
        keywords: ['intro', 'install', 'sandui', 'overview'],
      },
      {
        href: '#microservice-layout',
        label: 'Microservice Layout',
        icon: 'deployed_code',
        description: 'Reference layout for SandurTech tools and dashboards.',
        keywords: ['layout', 'tool', 'header', 'panel', 'result'],
      },
    ],
  },
  {
    title: 'Foundations',
    items: [
      {
        href: '#tokens',
        label: 'Design Tokens',
        icon: 'palette',
        description: 'Core color, theme, and spacing references.',
        keywords: ['tokens', 'colors', 'palette', 'theme', 'spacing'],
      },
      {
        href: '#typography',
        label: 'Typography',
        icon: 'format_size',
        description: 'Headings, body styles, and type hierarchy guidance.',
        keywords: ['type', 'headings', 'body', 'copy', 'text'],
      },
      {
        href: '#kbd',
        label: 'Kbd',
        icon: 'keyboard_keys',
        description: 'Keyboard shortcut keycaps and command hints.',
        keywords: ['keyboard', 'shortcut', 'hotkey', 'command', 'kbd'],
      },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        href: '#buttons',
        label: 'Buttons',
        icon: 'smart_button',
        description: 'Primary, secondary, outline, success, and failed action buttons.',
        keywords: ['button', 'cta', 'action', 'primary', 'secondary'],
      },
      {
        href: '#inputs',
        label: 'Inputs & Forms',
        icon: 'text_fields',
        description: 'Text fields, validation, helper text, and form inputs.',
        keywords: ['input', 'form', 'textfield', 'validation', 'field'],
      },
      {
        href: '#cards',
        label: 'Cards',
        icon: 'dashboard',
        description: 'Surface containers for grouped content and actions.',
        keywords: ['card', 'container', 'panel', 'surface'],
      },
      {
        href: '#checkboxes',
        label: 'Checkboxes',
        icon: 'check_box',
        description: 'Multi-select controls for independent options.',
        keywords: ['checkbox', 'selection', 'multi-select', 'check'],
      },
      {
        href: '#radio-buttons',
        label: 'Radio Buttons',
        icon: 'radio_button_checked',
        description: 'Single-choice controls for mutually exclusive options.',
        keywords: ['radio', 'choice', 'single-select', 'option'],
      },
      {
        href: '#switches',
        label: 'Switches',
        icon: 'toggle_on',
        description: 'Immediate on or off state controls.',
        keywords: ['switch', 'toggle', 'boolean', 'state'],
      },
      {
        href: '#breadcrumbs',
        label: 'Breadcrumbs',
        icon: 'route',
        description: 'Hierarchy navigation and location context.',
        keywords: ['breadcrumb', 'navigation', 'hierarchy', 'path'],
      },
      {
        href: '#pagination',
        label: 'Pagination',
        icon: 'pages',
        description: 'Paged result navigation for larger content sets.',
        keywords: ['pagination', 'pages', 'paging', 'results'],
      },
      {
        href: '#toast',
        label: 'Toast',
        icon: 'toast',
        description: 'Rich transient status messages with actions.',
        keywords: ['toast', 'feedback', 'notification', 'status'],
      },
      {
        href: '#snackbar',
        label: 'Snackbar',
        icon: 'sms',
        description: 'Compact inline feedback for lightweight updates.',
        keywords: ['snackbar', 'feedback', 'message', 'notice'],
      },
      {
        href: '#modals',
        label: 'Modal Dialogs',
        icon: 'web_asset',
        description: 'Focused dialogs for confirmation and editing flows.',
        keywords: ['modal', 'dialog', 'overlay', 'popup'],
      },
      {
        href: '#utilities',
        label: 'Utilities',
        icon: 'category',
        description: 'Badges, dividers, and supporting utility primitives.',
        keywords: ['utilities', 'badge', 'divider', 'helper'],
      },
    ],
  },
];

export const DocsApp: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('intro');
  const [searchQuery, setSearchQuery] = useState('');
  const logoSrc = `${import.meta.env.BASE_URL}SandurTech-Logo-SVG.svg`;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    const sections = navGroups
      .flatMap((group) => group.items)
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredGroups = navGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (!normalizedQuery) return true;
        const haystack = [
          item.label,
          item.description,
          item.href.replace('#', ''),
          ...item.keywords,
        ]
          .join(' ')
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      }),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="docs-layout">
      <a className="docs-skip-link" href="#main-content">Skip to content</a>
      <aside className="docs-sidebar">
        <a href="#" className="docs-logo">
          <span className="docs-logo-mark">
            <img src={logoSrc} alt="SandurTech logo" className="docs-logo-image" />
          </span>
          <span className="docs-logo-copy">
            <span>Sand <span>UI</span></span>
            <small>Component Catalog</small>
          </span>
        </a>
        <div className="docs-search">
          <span className="docs-search-icon material-symbols-rounded" aria-hidden="true">search</span>
          <input
            type="search"
            className="docs-search-input"
            placeholder="Search components, sections, keywords..."
            aria-label="Search documentation"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="docs-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <span className="material-symbols-rounded" aria-hidden="true">close</span>
            </button>
          )}
        </div>
        <nav className="docs-nav" aria-label="Section navigation">
          {filteredGroups.map((group) => (
            <div key={group.title} className="docs-nav-group">
              <div className="docs-nav-title">{group.title}</div>
              <div className="docs-nav-list">
                {group.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`docs-nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                    aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                  >
                    <span className="docs-nav-link-main">
                      <span className="docs-nav-icon material-symbols-rounded" aria-hidden="true">{item.icon}</span>
                      <span className="docs-nav-copy">
                        <span>{item.label}</span>
                        <span className="docs-nav-description">{item.description}</span>
                      </span>
                    </span>
                    <span className="docs-nav-arrow material-symbols-rounded" aria-hidden="true">chevron_right</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
          {filteredGroups.length === 0 && (
            <div className="docs-search-empty" role="status">
              <span className="material-symbols-rounded" aria-hidden="true">search_off</span>
              <span>No matching sections found.</span>
            </div>
          )}
        </nav>
      </aside>

      <main className="docs-main" id="main-content" tabIndex={-1}>
        <header className="docs-header">
          <h1 className="docs-title">Component <br />Catalog <span>& Reference</span></h1>
          <button
            className="sand-theme-btn"
            onClick={toggleTheme}
            title="Toggle Theme"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </header>

        <Overview />
        <DesignTokens />
        <Typography />
        <KbdDocs />
        <ButtonDocs />
        <InputDocs />
        <CardDocs />
        <SelectionDocs />
        <NavigationDocs />
        <FeedbackDocs />
        <ModalDocs />
        <UtilitiesDocs />

      </main>
    </div>
  );
};
