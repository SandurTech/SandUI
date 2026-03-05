import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Kbd from './Kbd';

describe('Kbd', () => {
  it('renders without crashing', () => {
    render(<Kbd />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Kbd />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
