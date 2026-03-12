import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SandInputGroup } from './Input';

describe('SandInputGroup', () => {
  it('associates labels and helper text with the input', async () => {
    const user = userEvent.setup();

    render(<SandInputGroup label="Email" helperText="Required field" />);

    const input = screen.getByLabelText('Email');
    await user.type(input, 'team@sandurtech.com');

    expect(input).toHaveValue('team@sandurtech.com');
    expect(input).toHaveAccessibleDescription('Required field');
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandInputGroup label="Name" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
