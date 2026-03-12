import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useRouterState } from '@tanstack/react-router';
import './Docs.scss';
import { navGroups, navItems } from './navigation';
import { useAppShell } from './useAppShell';
import { DocNavigation } from '../docs/components/DocNavigation';
import { SandDrawer, SandIcon } from '../components';

const logoSrc = `${import.meta.env.BASE_URL}SandurTech-Logo-SVG.svg`;

export function AppShell() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const { theme, searchQuery, setSearchQuery, clearSearch, toggleTheme } = useAppShell();

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredGroups = navGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        if (!normalizedQuery) {
          return true;
        }

        return [item.label, item.description, item.to, ...item.keywords]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);
      }),
    }))
    .filter((group) => group.items.length > 0);

  const currentItem = navItems.find((item) => item.to === pathname) ?? navItems[0];

  useEffect(() => {
    const pageUrl = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}${currentItem.to}`, window.location.origin).toString();
    const upsertMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = value;
    };

    document.title = currentItem.metaTitle;
    upsertMeta('name', 'description', currentItem.metaDescription);
    upsertMeta('property', 'og:title', currentItem.metaTitle);
    upsertMeta('property', 'og:description', currentItem.metaDescription);
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('name', 'twitter:title', currentItem.metaTitle);
    upsertMeta('name', 'twitter:description', currentItem.metaDescription);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    let schemaScript = document.getElementById('sandui-route-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'sandui-route-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(
      [
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: `SandUI ${currentItem.label}`,
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          description: currentItem.metaDescription,
          url: pageUrl,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'CodeRepository',
          name: `SandUI ${currentItem.label} Documentation`,
          codeRepository: 'https://github.com/sandurtech/SandUI',
          programmingLanguage: ['TypeScript', 'React'],
          url: pageUrl,
          description: currentItem.llmsSummary,
        },
      ],
      null,
      2,
    );
  }, [currentItem]);

  return (
    <div className="docs-layout">
      <a className="docs-skip-link" href="#main-content">Skip to content</a>

      <aside className="docs-sidebar">
        <Link to="/" className="docs-logo">
          <span className="docs-logo-mark">
            <img src={logoSrc} alt="SandurTech logo" className="docs-logo-image" />
          </span>
          <span className="docs-logo-copy">
            <span>Sand <span>UI</span></span>
            <small>Component Catalog</small>
          </span>
        </Link>

        <div className="docs-search">
          <span className="docs-search-icon material-symbols-rounded" aria-hidden="true">search</span>
          <input
            type="search"
            className="docs-search-input"
            placeholder="Search pages, sections, keywords..."
            aria-label="Search documentation pages"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="docs-search-clear"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <span className="material-symbols-rounded" aria-hidden="true">close</span>
            </button>
          )}
        </div>

        <nav className="docs-nav" aria-label="Global navigation">
          {filteredGroups.map((group) => (
            <div key={group.title} className="docs-nav-group">
              <div className="docs-nav-title">{group.title}</div>
              <div className="docs-nav-list">
                {group.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="docs-nav-link"
                    activeProps={{
                      className: 'docs-nav-link active',
                      'aria-current': 'page',
                    }}
                  >
                    <span className="docs-nav-link-main">
                      <SandIcon icon={item.icon} className="docs-nav-icon" />
                      <span className="docs-nav-copy">
                        <span>{item.label}</span>
                        <span className="docs-nav-description">{item.description}</span>
                      </span>
                    </span>
                    <SandIcon icon="chevron_right" className="docs-nav-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {filteredGroups.length === 0 && (
            <div className="docs-search-empty" role="status">
              <span className="material-symbols-rounded" aria-hidden="true">search_off</span>
              <span>No matching pages found.</span>
            </div>
          )}
        </nav>
      </aside>

      <main className="docs-main" id="main-content" tabIndex={-1}>
        <header className="docs-header">
          <div className="docs-header-main">
            <button
              className="docs-mobile-menu-btn"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <SandIcon icon="menu" size={24} />
            </button>
            <div>
              <p className="docs-route-overline">SandUI Library Catalogue</p>
              <h1 className="docs-title">{currentItem.label} <span>Reference</span></h1>
            </div>
          </div>

          <div className="docs-header-actions">
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
          </div>
        </header>

        <Suspense
          fallback={(
            <div className="docs-loading" role="status">
              <span className="material-symbols-rounded" aria-hidden="true">progress_activity</span>
              <span>Loading page…</span>
            </div>
          )}
        >
          <div className="docs-page-content">
            <Outlet />
            <DocNavigation />
          </div>
        </Suspense>
      </main>

      <SandDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Documentation"
      >
        <div className="docs-drawer-content">
          <div className="docs-drawer-theme-toggle">
            <span>Theme Mode</span>
            <button
              className="sand-theme-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>

          <nav className="docs-nav" aria-label="Mobile navigation">
            {navGroups.map((group) => (
              <div key={group.title} className="docs-nav-group u-mb-4">
                <div className="docs-nav-title">{group.title}</div>
                <div className="docs-nav-list">
                  {group.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="docs-nav-link"
                      onClick={() => setIsDrawerOpen(false)}
                      activeProps={{
                        className: 'docs-nav-link active',
                        'aria-current': 'page',
                      }}
                    >
                      <span className="docs-nav-link-main">
                        <SandIcon icon={item.icon} className="docs-nav-icon" />
                        <span className="docs-nav-copy">
                          <span>{item.label}</span>
                          <span className="docs-nav-description">{item.description}</span>
                        </span>
                      </span>
                      <SandIcon icon="chevron_right" className="docs-nav-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </SandDrawer>
    </div>
  );
}
