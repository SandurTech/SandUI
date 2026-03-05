import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import SandThemeContext from './SandThemeContext';

import { SandThemeProvider, useSandTheme } from './SandThemeContext';

const TestComponent = () => {
  const { theme, toggleTheme } = useSandTheme();
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

describe('SandThemeContext', () => {
  it('renders without crashing', () => {
    render(
      <SandThemeProvider>
        <div>Test</div>
      </SandThemeProvider>
    );
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <SandThemeProvider>
        <div>Test</div>
      </SandThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
