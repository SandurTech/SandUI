import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Toast from './Toast';

describe('Toast', () => {
  it('renders without crashing', () => {
    render(<Toast />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Toast />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
