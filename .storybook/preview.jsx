import React from 'react';
import './preview.scss';
import { SandThemeProvider } from '../src/SandThemeContext';
import { sandDark, sandLight } from './theme';
import { useDarkMode } from 'storybook-dark-mode';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    darkMode: {
      dark: sandDark,
      light: sandLight,
      current: 'dark',
    },
    docs: {
      // storybook-dark-mode automatically syncs docs theme if configured!
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          '01. Foundations', ['Colors', 'Typography', 'Spacing', 'Shadows', 'Theme'],
          '02. Atoms', ['SandButton', 'SandLink', 'SandBadge', 'SandIcon'],
          '03. Molecules', ['SandInputGroup', 'SandCard', 'SandToast', 'SandBox'],
          '04. Organisms', ['SandNavbar', 'SandSidebar', 'SandFooter'],
          '05. Templates', ['StandardLayout', 'AuthLayout'],
        ],
      },
    },
  },
  decorators: [
    (Story) => {
      const isDark = useDarkMode();
      
      return (
        <SandThemeProvider defaultTheme={isDark ? 'dark' : 'light'} persist={false}>
          <Story />
        </SandThemeProvider>
      );
    },
  ],
};

export default preview;
