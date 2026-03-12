/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type PropsWithChildren,
} from 'react';

type SandThemeMode = 'light' | 'dark' | 'system';

export interface SandThemeTokens {
  accent?: string;
  accentDark?: string;
  surface?: string;
  surfaceVariant?: string;
  text?: string;
  textMuted?: string;
  border?: string;
  shadowSm?: string;
  shadowMd?: string;
  shadowLg?: string;
}

export interface SandThemeProviderProps extends PropsWithChildren {
  defaultTheme?: SandThemeMode;
  theme?: SandThemeMode;
  tokens?: SandThemeTokens;
  className?: string;
  /** Whether to apply the theme to the document root (<html>). Only one provider should be the root. */
  root?: boolean;
}

export interface SandThemeContextValue {
  theme: SandThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: SandThemeMode) => void;
  toggleTheme: () => void;
}

const SandThemeContext = createContext<SandThemeContextValue | null>(null);

function resolveMode(theme: SandThemeMode) {
  if (theme !== 'system') {
    return theme;
  }

  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function toCssVariables(tokens?: SandThemeTokens) {
  if (!tokens) {
    return undefined;
  }

  const vars: CSSProperties & Record<`--${string}`, string> = {};

  if (tokens.accent) vars['--sand-accent'] = tokens.accent;
  if (tokens.accentDark) vars['--sand-accent-dark'] = tokens.accentDark;
  if (tokens.surface) vars['--theme-surface'] = tokens.surface;
  if (tokens.surfaceVariant) vars['--theme-surface-variant'] = tokens.surfaceVariant;
  if (tokens.text) vars['--theme-text'] = tokens.text;
  if (tokens.textMuted) vars['--theme-text-muted'] = tokens.textMuted;
  if (tokens.border) vars['--theme-border'] = tokens.border;
  if (tokens.shadowSm) vars['--shadow-sm'] = tokens.shadowSm;
  if (tokens.shadowMd) vars['--shadow-md'] = tokens.shadowMd;
  if (tokens.shadowLg) vars['--shadow-lg'] = tokens.shadowLg;

  return vars;
}

export function SandThemeProvider({
  children,
  defaultTheme = 'system',
  theme: controlledTheme,
  tokens,
  className,
  root = false,
}: SandThemeProviderProps) {
  const [uncontrolledTheme, setUncontrolledTheme] = useState<SandThemeMode>(defaultTheme);
  const theme = controlledTheme ?? uncontrolledTheme;
  const resolvedTheme = resolveMode(theme);

  useEffect(() => {
    if (!root || typeof document === 'undefined') {
      return;
    }

    document.documentElement.dataset.theme = resolvedTheme;
  }, [resolvedTheme, root]);

  const value = useMemo<SandThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme: setUncontrolledTheme,
      toggleTheme: () => setUncontrolledTheme((current) => (resolveMode(current) === 'dark' ? 'light' : 'dark')),
    }),
    [resolvedTheme, theme],
  );

  return (
    <SandThemeContext.Provider value={value}>
      <div className={className} data-theme={resolvedTheme} style={toCssVariables(tokens)}>
        {children}
      </div>
    </SandThemeContext.Provider>
  );
}

export function useSandTheme() {
  const context = useContext(SandThemeContext);

  if (!context) {
    throw new Error('useSandTheme must be used within SandThemeProvider.');
  }

  return context;
}
