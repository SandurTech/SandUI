import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Badge from './Badge';

describe('Badge', () => {
  it('renders without crashing', () => {
    render(<Badge />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Badge />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
