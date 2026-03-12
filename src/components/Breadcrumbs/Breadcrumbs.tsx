import { forwardRef, useMemo, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import styles from './Breadcrumbs.module.scss';
import { cn } from '../utils';

export interface SandBreadcrumbItem {
  /** Content rendered for the breadcrumb item. */
  label: ReactNode;
  /** Optional link target. When omitted the item is rendered as plain text. */
  href?: string;
}

export interface SandBreadcrumbsProps extends ComponentPropsWithoutRef<'nav'> {
  /** Ordered breadcrumb items displayed in the navigation trail. */
  items: SandBreadcrumbItem[];
}

export const SandBreadcrumbs = forwardRef<HTMLElement, SandBreadcrumbsProps>(function SandBreadcrumbs(
  { items, className = '', 'aria-label': ariaLabel = 'Breadcrumb', ...props },
  ref,
) {
  const renderedItems = useMemo(
    () =>
      items.map((item, index) => {
        const isCurrent = index === items.length - 1;
        return (
          <li key={`${String(item.label)}-${index}`} className={styles['sand-breadcrumb-item']}>
            {item.href && !isCurrent ? (
              <a href={item.href} className={styles['sand-breadcrumb-link']}>
                {item.label}
              </a>
            ) : (
              <span
                aria-current={isCurrent ? 'page' : undefined}
                className={isCurrent ? styles['sand-breadcrumb-current'] : undefined}
              >
                {item.label}
              </span>
            )}
            {!isCurrent && (
              <span className={cn(styles['sand-breadcrumb-separator'], 'material-symbols-rounded')} aria-hidden="true">
                chevron_right
              </span>
            )}
          </li>
        );
      }),
    [items],
  );

  return (
    <nav ref={ref} aria-label={ariaLabel} className={cn(styles['sand-breadcrumbs'], className)} {...props}>
      <ol>{renderedItems}</ol>
    </nav>
  );
});
SandBreadcrumbs.displayName = 'SandBreadcrumbs';
