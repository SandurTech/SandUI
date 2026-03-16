import { 
  forwardRef, 
  createContext, 
  useContext, 
  type ComponentType, 
  type HTMLAttributes, 
  type SVGProps,
  type ReactNode
} from 'react';
import { cn } from '../utils';

export type SandIconType = string | ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Mapping of internal icon aliases to actual icon names or components.
 */
export interface SandIconMap {
  [key: string]: SandIconType | undefined;
  close?: SandIconType;
  menu?: SandIconType;
  expand_more?: SandIconType;
  chevron_right?: SandIconType;
  check?: SandIconType;
  info?: SandIconType;
  error?: SandIconType;
  warning?: SandIconType;
  check_circle?: SandIconType;
  copy?: SandIconType;
  done?: SandIconType;
}

interface SandIconContextValue {
  map?: SandIconMap;
  /** Custom renderer for string-based icons. Defaults to Material Symbols. */
  renderIcon?: (name: string, props: SandIconProps) => ReactNode;
}

const SandIconContext = createContext<SandIconContextValue>({});

export const useSandIcon = () => useContext(SandIconContext);

export interface SandIconProviderProps {
  children: ReactNode;
  /** Mapping of internal aliases to custom icon components or names. */
  icons?: SandIconMap;
  /** Optional custom renderer for all string-based icons. */
  renderIcon?: (name: string, props: SandIconProps) => ReactNode;
}

/**
 * Provides icon configuration to the library.
 * Allows remapping internal icons or using a custom icon library (Lucide, Radix, etc.).
 */
export function SandIconProvider({ children, icons, renderIcon }: SandIconProviderProps) {
  return (
    <SandIconContext.Provider value={{ map: icons, renderIcon }}>
      {children}
    </SandIconContext.Provider>
  );
}

export interface SandIconProps extends HTMLAttributes<HTMLSpanElement> {
  /** 
   * Icon name or alias. 
   * If an alias is provided in SandIconProvider, it will be used.
   */
  icon?: SandIconType;
  /** Icon size in pixels or CSS string. */
  size?: number | string;
  /** Whether the icon should be filled (for Material Symbols). */
  fill?: boolean;
}

export const SandIcon = forwardRef<HTMLElement, SandIconProps>(function SandIcon(
  { icon, size, fill, className, style, ...props },
  ref,
) {
  const { map, renderIcon } = useSandIcon();
  
  // Resolve icon from map if it's a string and exists in the map
  const resolvedIcon = typeof icon === 'string' ? (map?.[icon] ?? icon) : icon;

  if (typeof resolvedIcon === 'function') {
    const IconComponent = resolvedIcon;
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

  // If a custom string renderer is provided
  if (typeof resolvedIcon === 'string' && renderIcon) {
    return <>{renderIcon(resolvedIcon, { size, fill, className, style, ...props })}</>;
  }

  // Default Material Symbols rendering
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
      {resolvedIcon}
    </span>
  );
});

SandIcon.displayName = 'SandIcon';
