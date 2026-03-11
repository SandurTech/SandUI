import React, { type HTMLAttributes } from 'react';
import styles from './Layout.module.scss';

export const Container: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`${styles['sand-container']} ${className}`.trim()} {...props}>
    {children}
  </div>
);

export const Header: React.FC<HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => (
  <header className={`${styles['sand-header']} ${className}`.trim()} {...props}>
    {children}
  </header>
);

export const ToolLayout: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className = '', ...props }) => (
  <div className={`${styles['sand-tool-layout']} ${className}`.trim()} {...props}>
    {children}
  </div>
);

export const ToolPanel: React.FC<HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => (
  <aside className={`${styles['sand-tool-panel']} ${className}`.trim()} {...props}>
    {children}
  </aside>
);

export const ResultPanel: React.FC<HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => (
  <main className={`${styles['sand-result-panel']} ${className}`.trim()} {...props}>
    {children}
  </main>
);

export const MicroserviceLayout: React.FC<{
  header: React.ReactNode;
  panel: React.ReactNode;
  result: React.ReactNode;
}> = ({ header, panel, result }) => (
  <>
    {header}
    <ToolLayout>
      {panel}
      {result}
    </ToolLayout>
  </>
);
