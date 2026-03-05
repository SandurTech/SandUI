import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Box from './Box';

describe('Box', () => {
  it('renders without crashing', () => {
    render(<Box />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Box />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
