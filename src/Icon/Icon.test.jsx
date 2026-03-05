import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Icon from './Icon';

describe('Icon', () => {
  it('renders without crashing', () => {
    render(<Icon />);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Icon />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
