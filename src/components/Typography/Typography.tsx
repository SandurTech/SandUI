import { forwardRef, type CSSProperties, type ElementType, type ForwardedRef } from 'react';
import type { SandPolymorphicComponent, SandPolymorphicProps } from '../polymorphic';
import { cn } from '../utils';
import styles from './Typography.module.scss';

type SandTextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type SandTitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
type SandTitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'display';
type SandTextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const weightMap: Record<SandTextWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const titleSizeMap: Record<SandTitleSize, string> = {
  xs: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.75rem',
  display: 'clamp(3rem, 6vw, 4.75rem)',
};

const textSizeMap: Record<SandTextSize, string> = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
};

export interface SandTitleOwnProps {
  level?: SandTitleLevel;
  size?: SandTitleSize;
  weight?: SandTextWeight;
  gradient?: boolean;
  muted?: boolean;
  style?: CSSProperties;
  className?: string;
}

export interface SandTextOwnProps {
  size?: SandTextSize;
  weight?: SandTextWeight;
  gradient?: boolean;
  muted?: boolean;
  style?: CSSProperties;
  className?: string;
}

export interface SandCodeOwnProps extends SandTextOwnProps {
  block?: boolean;
}

export type SandTitleProps<T extends ElementType = 'h2'> = SandPolymorphicProps<T, SandTitleOwnProps>;
export type SandTextProps<T extends ElementType = 'p'> = SandPolymorphicProps<T, SandTextOwnProps>;
export type SandCodeProps<T extends ElementType = 'code'> = SandPolymorphicProps<T, SandCodeOwnProps>;

export const SandTitle = forwardRef(function SandTitle<T extends ElementType = 'h2'>(
  { as, level = 2, size = 'lg', weight = 'semibold', gradient, muted, className, style, ...props }: SandTitleProps<T>,
  ref: ForwardedRef<Element>,
) {
  const Component = (as ?? (`h${level}` as ElementType)) as ElementType;

  return (
    <Component
      ref={ref}
      className={cn(styles.title, gradient && styles.gradient, muted && styles.muted, className)}
      style={{ fontSize: titleSizeMap[size], fontWeight: weightMap[weight], ...style }}
      {...props}
    />
  );
}) as SandPolymorphicComponent<'h2', SandTitleOwnProps>;

(SandTitle as { displayName?: string }).displayName = 'SandTitle';

export const SandText = forwardRef(function SandText<T extends ElementType = 'p'>(
  { as, size = 'md', weight = 'regular', gradient, muted, className, style, ...props }: SandTextProps<T>,
  ref: ForwardedRef<Element>,
) {
  const Component = (as ?? 'p') as ElementType;

  return (
    <Component
      ref={ref}
      className={cn(styles.text, gradient && styles.gradient, muted && styles.muted, className)}
      style={{ fontSize: textSizeMap[size], fontWeight: weightMap[weight], ...style }}
      {...props}
    />
  );
}) as SandPolymorphicComponent<'p', SandTextOwnProps>;

(SandText as { displayName?: string }).displayName = 'SandText';

export const SandCode = forwardRef(function SandCode<T extends ElementType = 'code'>(
  { as, block, size = 'sm', weight = 'medium', className, style, ...props }: SandCodeProps<T>,
  ref: ForwardedRef<Element>,
) {
  const Component = (as ?? (block ? 'pre' : 'code')) as ElementType;

  return (
    <Component
      ref={ref}
      className={cn(styles.code, className)}
      style={{
        fontSize: textSizeMap[size],
        fontWeight: weightMap[weight],
        display: block ? 'block' : undefined,
        whiteSpace: block ? 'pre-wrap' : undefined,
        ...style,
      }}
      {...props}
    />
  );
}) as SandPolymorphicComponent<'code', SandCodeOwnProps>;

(SandCode as { displayName?: string }).displayName = 'SandCode';
