import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import Button from './Button';

import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Click Me</Button>);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Click Me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('handles onClick events', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    await userEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('prevents interaction when disabled', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Click Me</Button>);

    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeDisabled();

    try {
      await userEvent.click(button);
    } catch (e) {
      // userEvent.click throws when pointer-events: none is present
    }
    expect(handleClick).not.toHaveBeenCalled();
  });
});
