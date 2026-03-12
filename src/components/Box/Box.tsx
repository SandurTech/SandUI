import { forwardRef, type CSSProperties, type ElementType, type ForwardedRef } from 'react';
import type { SandPolymorphicComponent, SandPolymorphicProps } from '../polymorphic';
import { cn, resolveRadius, resolveSpace, withCssVar } from '../utils';
import styles from './Box.module.scss';

type SandAlign = 'stretch' | 'start' | 'center' | 'end' | 'baseline';
type SandJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface SandBoxOwnProps {
  padding?: string | number;
  margin?: string | number;
  gap?: string | number;
  align?: SandAlign;
  justify?: SandJustify;
  surface?: boolean;
  inline?: boolean;
  width?: string | number;
  radius?: string | number;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  style?: CSSProperties;
  className?: string;
}

export type SandBoxProps<T extends ElementType = 'div'> = SandPolymorphicProps<T, SandBoxOwnProps>;

const alignMap: Record<SandAlign, string> = {
  stretch: 'stretch',
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  baseline: 'baseline',
};

const justifyMap: Record<SandJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

export const SandBox = forwardRef(function SandBox<T extends ElementType = 'div'>(
  {
    as,
    padding,
    margin,
    gap,
    align,
    justify,
    surface,
    inline,
    width,
    radius,
    shadow = 'none',
    className,
    style,
    ...props
  }: SandBoxProps<T>,
  ref: ForwardedRef<Element>,
) {
  const Component = (as ?? 'div') as ElementType;

  let nextStyle = style;
  nextStyle = withCssVar(nextStyle, '--sand-padding', resolveSpace(padding));
  nextStyle = withCssVar(nextStyle, '--sand-margin', resolveSpace(margin));
  nextStyle = withCssVar(nextStyle, '--sand-gap', resolveSpace(gap));
  nextStyle = withCssVar(nextStyle, '--sand-align', align ? alignMap[align] : undefined);
  nextStyle = withCssVar(nextStyle, '--sand-justify', justify ? justifyMap[justify] : undefined);
  nextStyle = withCssVar(nextStyle, '--sand-width', typeof width === 'number' ? `${width}px` : width);
  nextStyle = withCssVar(nextStyle, '--sand-box-radius', resolveRadius(radius));
  nextStyle = withCssVar(
    nextStyle,
    '--sand-box-shadow',
    shadow === 'none' ? 'none' : `var(--shadow-${shadow})`,
  );

  return (
    <Component
      ref={ref}
      className={cn(styles.box, surface && styles.surface, inline && styles.inline, className)}
      style={nextStyle}
      {...props}
    />
  );
}) as SandPolymorphicComponent<'div', SandBoxOwnProps>;

(SandBox as { displayName?: string }).displayName = 'SandBox';
