import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Link from './Link';

describe('Link', () => {
  it('renders without crashing', () => {
    render(<Link />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Link />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
