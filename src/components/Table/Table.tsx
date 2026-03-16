import { forwardRef, type HTMLAttributes, type TableHTMLAttributes, type ThHTMLAttributes, type TdHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../utils';
import styles from './Table.module.scss';

export interface SandTableProps extends TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  hoverable?: boolean;
  stickyHeader?: boolean;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
  /** Ordered collection of data items to render as table rows. */
  items?: Record<string, ReactNode>[];
  /** @deprecated Use items instead */
  data?: Record<string, ReactNode>[];
}

export const SandTableBase = forwardRef<HTMLTableElement, SandTableProps>(function SandTable(
  { striped, hoverable = true, stickyHeader, className, wrapperProps, items, data, children, ...props },
  ref,
) {
  const resolvedItems = items ?? data;

  return (
    <div {...wrapperProps} className={cn(styles.wrapper, wrapperProps?.className)}>
      <table
        ref={ref}
        className={cn(styles.table, striped && styles.striped, hoverable && styles.hoverable, stickyHeader && styles.stickyHeader, className)}
        {...props}
      >
        {children}
        {resolvedItems && !children && (
          <tbody>
            {resolvedItems.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
});

export const SandTableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ children, ...props }, ref) => <thead ref={ref} {...props}>{children}</thead>
);
SandTableHeader.displayName = 'SandTable.Header';

export const SandTableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ children, ...props }, ref) => <tbody ref={ref} {...props}>{children}</tbody>
);
SandTableBody.displayName = 'SandTable.Body';

export const SandTableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ children, ...props }, ref) => <tr ref={ref} {...props}>{children}</tr>
);
SandTableRow.displayName = 'SandTable.Row';

export const SandTableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ children, ...props }, ref) => <td ref={ref} {...props}>{children}</td>
);
SandTableCell.displayName = 'SandTable.Cell';

export const SandTableHeaderCell = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ children, ...props }, ref) => <th ref={ref} {...props}>{children}</th>
);
SandTableHeaderCell.displayName = 'SandTable.HeaderCell';

type SandTableComponent = typeof SandTableBase & {
  Header: typeof SandTableHeader;
  Body: typeof SandTableBody;
  Row: typeof SandTableRow;
  Cell: typeof SandTableCell;
  HeaderCell: typeof SandTableHeaderCell;
};

export const SandTable = Object.assign(SandTableBase, {
  Header: SandTableHeader,
  Body: SandTableBody,
  Row: SandTableRow,
  Cell: SandTableCell,
  HeaderCell: SandTableHeaderCell,
}) as SandTableComponent;
