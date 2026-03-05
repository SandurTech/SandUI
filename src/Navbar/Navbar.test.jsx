import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Navbar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
