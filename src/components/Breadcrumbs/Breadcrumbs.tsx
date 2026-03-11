import React from 'react';
import styles from './Breadcrumbs.module.scss';

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '', ...props }) => (
  <nav aria-label="Breadcrumb" className={`${styles['sand-breadcrumbs']} ${className}`.trim()} {...props}>
    {items.map((item, index) => {
      const isCurrent = index === items.length - 1;
      return (
        <span key={`${String(item.label)}-${index}`} className={styles['sand-breadcrumb-item']}>
          {item.href && !isCurrent ? (
            <a href={item.href} className={styles['sand-breadcrumb-link']}>
              {item.label}
            </a>
          ) : (
            <span aria-current={isCurrent ? 'page' : undefined} className={isCurrent ? styles['sand-breadcrumb-current'] : undefined}>
              {item.label}
            </span>
          )}
          {!isCurrent && <span className={`${styles['sand-breadcrumb-separator']} material-symbols-rounded`} aria-hidden="true">chevron_right</span>}
        </span>
      );
    })}
  </nav>
);
