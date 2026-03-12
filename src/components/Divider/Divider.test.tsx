import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandDivider } from './Divider';

describe('SandDivider', () => {
  it('renders a semantic separator', () => {
    render(<SandDivider />);
    expect(screen.getByRole('separator')).toBeVisible();
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandDivider />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
