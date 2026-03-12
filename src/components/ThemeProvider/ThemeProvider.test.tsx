import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandThemeProvider, useSandTheme } from './ThemeProvider';

const ThemeConsumer = () => {
  const { resolvedTheme } = useSandTheme();
  return <span>Active: {resolvedTheme}</span>;
};

describe('SandThemeProvider', () => {
  it('provides theme context to children', () => {
    render(
      <SandThemeProvider theme="dark">
        <ThemeConsumer />
      </SandThemeProvider>
    );
    expect(screen.getByText('Active: dark')).toBeDefined();
  });
});
