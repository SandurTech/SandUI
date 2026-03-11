import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import { DocsApp } from './docs/DocsApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsApp />
  </React.StrictMode>,
);
