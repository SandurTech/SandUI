import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandBadge } from './Badge';

describe('SandBadge', () => {
  it('renders content accessibly', () => {
    render(<SandBadge variant="success">Stable</SandBadge>);
    expect(screen.getByText('Stable')).toBeVisible();
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandBadge>Default badge</SandBadge>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
