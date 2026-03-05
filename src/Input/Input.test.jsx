import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Input from './Input';

import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input label="Test Input" />);
  });

  it('has no accessibility violations', async () => {
    // A label is required for accessibility
    const { container } = render(<Input label="Test Input" placeholder="Placeholder" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('reflects onChange values', async () => {
    const handleChange = vi.fn();
    render(<Input label="Test Input" onChange={handleChange} />);

    // The Input component uses standard label wrapping
    const input = screen.getByLabelText('Test Input');

    await userEvent.type(input, 'hello');
    expect(handleChange).toHaveBeenCalledTimes(5);
    expect(input).toHaveValue('hello');
  });

  it('prevents interaction when disabled', async () => {
    render(<Input label="Test Input" disabled />);
    const input = screen.getByLabelText('Test Input');
    expect(input).toBeDisabled();
  });
});
