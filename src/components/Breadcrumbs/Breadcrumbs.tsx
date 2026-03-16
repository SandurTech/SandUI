import { forwardRef, useMemo, Children, isValidElement, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import styles from './Breadcrumbs.module.scss';
import { cn } from '../utils';

export interface SandBreadcrumbItem {
  /** Content rendered for the breadcrumb item. */
  label: ReactNode;
  /** Optional link target. When omitted the item is rendered as plain text. */
  href?: string;
}

/**
 * SandBreadcrumbItem component for declarative definition of breadcrumb items.
 */
export const SandBreadcrumbItem = () => null;
SandBreadcrumbItem.displayName = 'SandBreadcrumbItem';

export interface SandBreadcrumbsProps extends Omit<ComponentPropsWithoutRef<'nav'>, 'children'> {
  /** Ordered breadcrumb items displayed in the navigation trail. */
  items?: SandBreadcrumbItem[];
  /** Declarative breadcrumb items as children. */
  children?: ReactNode;
}

export const SandBreadcrumbs = forwardRef<HTMLElement, SandBreadcrumbsProps>(function SandBreadcrumbs(
  { items = [], className = '', 'aria-label': ariaLabel = 'Breadcrumb', children, ...props },
  ref,
) {
  const resolvedItems = useMemo(() => {
    const allItems = [...items];
    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === SandBreadcrumbItem) {
        allItems.push(child.props as SandBreadcrumbItem);
      }
    });
    return allItems;
  }, [items, children]);

  const renderedItems = useMemo(
    () =>
      resolvedItems.map((item, index) => {
        const isCurrent = index === resolvedItems.length - 1;
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
    [resolvedItems],
  );

  return (
    <nav ref={ref} aria-label={ariaLabel} className={cn(styles['sand-breadcrumbs'], className)} {...props}>
      <ol>{renderedItems}</ol>
    </nav>
  );
});
SandBreadcrumbs.displayName = 'SandBreadcrumbs';
