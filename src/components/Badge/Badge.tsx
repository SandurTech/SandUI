import { forwardRef, useMemo, type ComponentPropsWithoutRef } from 'react';
import styles from './Badge.module.scss';
import { cn } from '../utils';

export interface SandBadgeProps extends ComponentPropsWithoutRef<'span'> {
  /** Visual treatment used to communicate emphasis or status. */
  variant?: 'primary' | 'secondary' | 'success' | 'failed';
}

export const SandBadge = forwardRef<HTMLSpanElement, SandBadgeProps>(function SandBadge(
  { variant = 'primary', className = '', ...props },
  ref,
) {
  const variantClass = useMemo(() => styles[`sand-badge-${variant}`], [variant]);

  return (
    <span
      ref={ref}
      className={cn(styles['sand-badge'], variantClass, className)}
      {...props}
    />
  );
});
SandBadge.displayName = 'SandBadge';
