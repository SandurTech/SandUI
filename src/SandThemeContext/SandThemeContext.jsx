/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

// ==========================================
// SAND THEME CONTEXT
// ==========================================
// Provides light/dark mode to the component tree.
// Sets `data-theme` on <html> and exposes a toggle via context.

const SandThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

/**
 * SandThemeProvider
 *
 * Wraps your app and provides the current theme + a toggle function.
 * All SandUI CSS-variable based tokens respond to `data-theme` on <html>,
 * so this context controls the entire color scheme.
 *
 * @param {string}  defaultTheme  - 'light' | 'dark' (default: 'light')
 * @param {boolean} persist       - Save preference to localStorage (default: true)
 */
export function SandThemeProvider({ 
  children, 
  defaultTheme = 'light', 
  persist = true 
}) {
  const [theme, setThemeState] = useState(() => {
    // 1. Respect persisted preference
    if (persist && typeof window !== 'undefined') {
      const stored = localStorage.getItem('sandui-theme');
      if (stored === 'light' || stored === 'dark') return stored;
    }

    // 2. Respect OS preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) return 'dark';
    }

    // 3. Fall back to prop
    return defaultTheme;
  });

  // Sync data-theme attribute on document root
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    if (persist) {
      localStorage.setItem('sandui-theme', theme);
    }
  }, [theme, persist]);

  // Listen for OS-level preference changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      // Only auto-switch if user hasn't manually persisted a preference
      if (persist && localStorage.getItem('sandui-theme')) return;
      setThemeState(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [persist]);

  const setTheme = useCallback((newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      setThemeState(newTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

  return (
    <SandThemeContext.Provider value={value}>
      {children}
    </SandThemeContext.Provider>
  );
}

SandThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTheme: PropTypes.oneOf(['light', 'dark']),
  persist: PropTypes.bool,
};

/**
 * useSandTheme hook
 * 
 * Returns { theme, toggleTheme, setTheme }
 */
export function useSandTheme() {
  const context = useContext(SandThemeContext);
  if (!context) {
    throw new Error('useSandTheme must be used within a <SandThemeProvider>');
  }
  return context;
}

export default SandThemeContext;
