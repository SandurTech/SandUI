import { forwardRef, type HTMLAttributes, type TableHTMLAttributes } from 'react';
import { cn } from '../utils';
import styles from './Table.module.scss';

export interface SandTableProps extends TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  hoverable?: boolean;
  stickyHeader?: boolean;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

export const SandTable = forwardRef<HTMLTableElement, SandTableProps>(function SandTable(
  { striped, hoverable = true, stickyHeader, className, wrapperProps, ...props },
  ref,
) {
  return (
    <div {...wrapperProps} className={cn(styles.wrapper, wrapperProps?.className)}>
      <table
        ref={ref}
        className={cn(styles.table, striped && styles.striped, hoverable && styles.hoverable, stickyHeader && styles.stickyHeader, className)}
        {...props}
      />
    </div>
  );
});

SandTable.displayName = 'SandTable';
