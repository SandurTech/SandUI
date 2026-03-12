import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import styles from './Card.module.scss';
import { cn } from '../utils';

export interface SandCardProps extends ComponentPropsWithoutRef<'article'> {
  /** Optional header content rendered in the card header region. */
  header?: ReactNode;
  /** Optional footer content rendered in the card footer region. */
  footer?: ReactNode;
}

export const SandCard = forwardRef<HTMLElement, SandCardProps>(function SandCard(
  { header, footer, children, className = '', ...props },
  ref,
) {
  return (
    <article ref={ref} className={cn(styles['sand-card'], className)} {...props}>
      {header && (
        <header className={styles['sand-card-header']}>{header}</header>
      )}
      <div className={styles['sand-card-body']}>{children}</div>
      {footer && (
        <footer className={styles['sand-card-footer']}>{footer}</footer>
      )}
    </article>
  );
});
SandCard.displayName = 'SandCard';
