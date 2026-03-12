import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SandButton } from './Button';

describe('SandButton', () => {
  it('supports mouse and keyboard activation', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<SandButton onClick={onClick}>Run</SandButton>);

    const button = screen.getByRole('button', { name: 'Run' });
    await user.click(button);
    button.focus();
    await user.keyboard('{Enter}');

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandButton>Save</SandButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
