import React, { useEffect, useState } from 'react';
import './Docs.scss';

import { Overview } from './components/Overview';
import { DesignTokens } from './components/DesignTokens';
import { Typography } from './components/Typography';
import { ButtonDocs } from './components/ButtonDocs';
import { InputDocs } from './components/InputDocs';
import { CardDocs } from './components/CardDocs';
import { UtilitiesDocs } from './components/UtilitiesDocs';

export const DocsApp: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="docs-layout">
      <aside className="docs-sidebar">
        <a href="#" className="docs-logo">
          Sand <span>UI</span>
        </a>
        <nav>
          <div className="docs-nav-group">
            <div className="docs-nav-title">Introduction</div>
            <a href="#intro" className="docs-nav-link">Overview</a>
            <a href="#microservice-layout" className="docs-nav-link">Microservice Layout</a>
          </div>
          <div className="docs-nav-group">
            <div className="docs-nav-title">Foundations</div>
            <a href="#tokens" className="docs-nav-link">Design Tokens</a>
            <a href="#typography" className="docs-nav-link">Typography</a>
          </div>
          <div className="docs-nav-group">
            <div className="docs-nav-title">Components</div>
            <a href="#buttons" className="docs-nav-link">Buttons</a>
            <a href="#inputs" className="docs-nav-link">Inputs & Forms</a>
            <a href="#cards" className="docs-nav-link">Cards</a>
            <a href="#utilities" className="docs-nav-link">Utilities</a>
          </div>
        </nav>
      </aside>

      <main className="docs-main">
        <header className="docs-header">
          <h1 className="docs-title">Component <br />Catalog <span>& Reference</span></h1>
          <button className="sand-theme-btn" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </header>

        <Overview />
        <DesignTokens />
        <Typography />
        <ButtonDocs />
        <InputDocs />
        <CardDocs />
        <UtilitiesDocs />

      </main>
    </div>
  );
};
