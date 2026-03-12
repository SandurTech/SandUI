import { forwardRef, type CSSProperties, type ElementType, type ForwardedRef } from 'react';
import type { SandPolymorphicComponent, SandPolymorphicProps } from '../polymorphic';
import { cn, resolveSpace, withCssVar } from '../utils';
import styles from '../Box/Box.module.scss';

export interface SandStackOwnProps {
  direction?: 'row' | 'column';
  gap?: string | number;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: boolean;
  surface?: boolean;
  className?: string;
  style?: CSSProperties;
}

export type SandStackProps<T extends ElementType = 'div'> = SandPolymorphicProps<T, SandStackOwnProps>;

export const SandStack = forwardRef(function SandStack<T extends ElementType = 'div'>(
  { as, direction = 'column', gap = 'md', align, justify, wrap, surface, className, style, ...props }: SandStackProps<T>,
  ref: ForwardedRef<Element>,
) {
  const Component = (as ?? 'div') as ElementType;

  let nextStyle = style;
  nextStyle = withCssVar(nextStyle, '--sand-display', 'flex');
  nextStyle = withCssVar(nextStyle, '--sand-gap', resolveSpace(gap));
  nextStyle = withCssVar(nextStyle, '--sand-align', align);
  nextStyle = withCssVar(nextStyle, '--sand-justify', justify);
  nextStyle = withCssVar(nextStyle, '--sand-stack-direction', direction);
  nextStyle = withCssVar(nextStyle, '--sand-stack-wrap', wrap ? 'wrap' : 'nowrap');

  return (
    <Component
      ref={ref}
      className={cn(styles.box, surface && styles.surface, className)}
      style={{
        flexDirection: 'var(--sand-stack-direction)',
        flexWrap: 'var(--sand-stack-wrap)',
        ...nextStyle,
      }}
      {...props}
    />
  );
}) as SandPolymorphicComponent<'div', SandStackOwnProps>;

(SandStack as { displayName?: string }).displayName = 'SandStack';
