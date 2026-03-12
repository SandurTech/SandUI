import { forwardRef, type HTMLAttributes } from 'react';
import { cn, resolveRadius } from '../utils';
import styles from './Loader.module.scss';

export interface SandLoaderProps extends HTMLAttributes<HTMLSpanElement> {
  size?: number;
}

export interface SandSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
}

export const SandLoader = forwardRef<HTMLSpanElement, SandLoaderProps>(function SandLoader(
  { size = 40, className, style, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      className={cn(styles.loader, className)}
      style={{ '--sand-loader-size': `${size}px`, ...style } as React.CSSProperties}
      {...props}
    />
  );
});

SandLoader.displayName = 'SandLoader';

export const SandSkeleton = forwardRef<HTMLDivElement, SandSkeletonProps>(function SandSkeleton(
  { width = '100%', height = 16, radius = 'md', className, style, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(styles.skeleton, className)}
      style={
        {
          width,
          height,
          '--sand-skeleton-radius': resolveRadius(radius),
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
});

SandSkeleton.displayName = 'SandSkeleton';
