import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from 'react';

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export const sandSpaceScale = {
  none: '0',
  '2xs': 'var(--sand-space-1)',
  xs: 'var(--sand-space-2)',
  sm: 'var(--sand-space-3)',
  md: 'var(--sand-space-4)',
  lg: 'var(--sand-space-5)',
  xl: 'var(--sand-space-6)',
  '2xl': 'var(--sand-space-7)',
  '3xl': 'var(--sand-space-8)',
} as const;

export const sandRadiusScale = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  full: 'var(--radius-full)',
} as const;

export type SandSpaceToken = keyof typeof sandSpaceScale;
export type SandRadiusToken = keyof typeof sandRadiusScale;
export type SandResponsiveValue<T> = T | Partial<Record<'sm' | 'md' | 'lg' | 'xl', T>>;

export function resolveSpace(value?: SandSpaceToken | number | string) {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value === 'number') {
    return `${value}px`;
  }

  return sandSpaceScale[value as SandSpaceToken] ?? value;
}

export function resolveRadius(value?: SandRadiusToken | number | string) {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value === 'number') {
    return `${value}px`;
  }

  return sandRadiusScale[value as SandRadiusToken] ?? value;
}

export function withCssVar(style: CSSProperties | undefined, name: `--${string}`, value?: string) {
  if (value === undefined) {
    return style;
  }

  return {
    ...style,
    [name]: value,
  } as CSSProperties;
}

export function withResponsiveCssVars<T extends string | number>(
  style: CSSProperties | undefined,
  name: string,
  value?: SandResponsiveValue<T>,
) {
  if (value === undefined) {
    return style;
  }

  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return withCssVar(style, `--${name}`, String(value));
  }

  let nextStyle = style;

  for (const [breakpoint, responsiveValue] of Object.entries(value)) {
    if (responsiveValue !== undefined) {
      nextStyle = withCssVar(nextStyle, `--${name}-${breakpoint}` as `--${string}`, String(responsiveValue));
    }
  }

  return nextStyle;
}

export function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(','),
    ),
  ).filter((element) => !element.hasAttribute('disabled') && !element.getAttribute('aria-hidden'));
}

export function handleHorizontalArrowNavigation(
  event: ReactKeyboardEvent<HTMLElement>,
  currentIndex: number,
  itemCount: number,
  onNavigate: (index: number) => void,
) {
  if (itemCount === 0) {
    return;
  }

  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault();
      onNavigate((currentIndex + 1) % itemCount);
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault();
      onNavigate((currentIndex - 1 + itemCount) % itemCount);
      break;
    case 'Home':
      event.preventDefault();
      onNavigate(0);
      break;
    case 'End':
      event.preventDefault();
      onNavigate(itemCount - 1);
      break;
    default:
      break;
  }
}
