import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders without crashing', () => {
    render(<Sidebar />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Sidebar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
