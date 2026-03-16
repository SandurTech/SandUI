import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SandDrawer } from './Navbar';

describe('SandDrawer', () => {
  it('traps focus and closes on Escape', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <SandDrawer open onClose={onClose} title="Menu">
        <button type="button">Item 1</button>
        <button type="button">Item 2</button>
      </SandDrawer>,
    );

    const closeBtn = screen.getByRole('button', { name: 'Close menu' });

    await waitFor(() => {
      expect(closeBtn).toHaveFocus();
    }, { timeout: 2000 });

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
