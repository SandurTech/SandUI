import { forwardRef, type CSSProperties, type HTMLAttributes } from 'react';
import { cn, resolveSpace, withCssVar, withResponsiveCssVars, type SandResponsiveValue } from '../utils';
import styles from './Grid.module.scss';

export interface SandGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: SandResponsiveValue<number>;
  gap?: string | number;
}

export interface SandGridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: SandResponsiveValue<number>;
}

export const SandGrid = forwardRef<HTMLDivElement, SandGridProps>(function SandGrid(
  { columns = 12, gap = 'md', className, style, ...props },
  ref,
) {
  let nextStyle = style as CSSProperties | undefined;
  nextStyle = withResponsiveCssVars(nextStyle, 'sand-grid-columns', columns);
  nextStyle = withCssVar(nextStyle, '--sand-grid-gap', resolveSpace(gap));

  return <div ref={ref} className={cn(styles.grid, className)} style={nextStyle} {...props} />;
});

SandGrid.displayName = 'SandGrid';

const Item = forwardRef<HTMLDivElement, SandGridItemProps>(function SandGridItem(
  { span = 1, className, style, ...props },
  ref,
) {
  let nextStyle = style as CSSProperties | undefined;
  nextStyle = withResponsiveCssVars(nextStyle, 'sand-grid-span', span);

  return <div ref={ref} className={cn(styles.item, className)} style={nextStyle} {...props} />;
});

Item.displayName = 'SandGrid.Item';

type SandGridComponent = typeof SandGrid & {
  Item: typeof Item;
};

export const SandGridRoot = Object.assign(SandGrid, {
  Item,
}) as SandGridComponent;
