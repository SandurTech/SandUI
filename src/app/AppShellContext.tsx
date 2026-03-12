import { createContext, useEffect, useState, type PropsWithChildren } from 'react';

type ThemeMode = 'light' | 'dark';

interface AppShellState {
  theme: ThemeMode;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  clearSearch: () => void;
  toggleTheme: () => void;
}

const AppShellContext = createContext<AppShellState | null>(null);

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
};

export function AppShellProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppShellContext.Provider
      value={{
        theme,
        searchQuery,
        setSearchQuery,
        clearSearch: () => setSearchQuery(''),
        toggleTheme,
      }}
    >
      {children}
    </AppShellContext.Provider>
  );
}

export { AppShellContext };
