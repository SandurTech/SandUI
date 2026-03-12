import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandProgress } from './Progress';

describe('SandProgress', () => {
  it('renders linear progress', () => {
    const { container } = render(<SandProgress value={50} />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders circular progress with value', () => {
    render(<SandProgress variant="circular" value={75} showValue />);
    expect(screen.getByText('75%')).toBeDefined();
  });
});
