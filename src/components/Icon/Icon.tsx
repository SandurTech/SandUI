import { forwardRef, type ComponentType, type HTMLAttributes, type SVGProps } from 'react';
import { cn } from '../utils';

export interface SandIconProps extends HTMLAttributes<HTMLSpanElement> {
  /** 
   * Icon name from Google Material Symbols (e.g., 'settings', 'home').
   * Can also be a component for backwards compatibility.
   */
  icon?: string | ComponentType<SVGProps<SVGSVGElement>>;
  /** Icon size in pixels or CSS string. */
  size?: number | string;
  /** Whether the icon should be filled. */
  fill?: boolean;
}

export const SandIcon = forwardRef<HTMLElement, SandIconProps>(function SandIcon(
  { icon, size, fill, className, style, ...props },
  ref,
) {
  if (typeof icon === 'function') {
    const IconComponent = icon;
    return (
      <IconComponent
        // @ts-expect-error - compatibility with SVG icons
        ref={ref}
        width={size ?? 18}
        height={size ?? 18}
        className={cn(className)}
        {...props}
      />
    );
  }

  return (
    <span
      ref={ref as React.Ref<HTMLSpanElement>}
      className={cn('material-symbols-rounded', className)}
      style={{
        fontSize: size,
        fontVariationSettings: fill ? "'FILL' 1" : undefined,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
      aria-hidden={props['aria-label'] ? undefined : true}
      {...props}
    >
      {icon}
    </span>
  );
});

SandIcon.displayName = 'SandIcon';
