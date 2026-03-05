import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Card from './Card';

describe('Card', () => {
  it('renders without crashing', () => {
    render(<Card />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Card />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
