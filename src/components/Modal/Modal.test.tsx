import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SandModal } from './Modal';

describe('SandModal', () => {
  it('renders with dialog semantics and closes on escape', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <SandModal open onClose={onClose} title="Publish" description="Confirm publish">
        Modal content
      </SandModal>,
    );

    expect(screen.getByRole('dialog', { name: 'Publish' })).toBeVisible();

    await waitFor(() => {
      const closeButtons = screen.getAllByRole('button', { name: 'Close dialog' });
      expect(closeButtons[closeButtons.length - 1]).toHaveFocus();
    });

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('sets initial focus when opened', async () => {
    render(
      <SandModal open onClose={() => {}} title="Unique Focus Test">
        <button type="button">Action</button>
      </SandModal>,
    );

    await waitFor(() => {
      const dialog = screen.getByRole('dialog', { name: 'Unique Focus Test' });
      const closeBtn = dialog.querySelector('._sand-modal-close_43e8b9');
      expect(closeBtn).toHaveFocus();
    });
    });


  it('matches the default snapshot', () => {
    const { container } = render(
      <SandModal open onClose={() => {}} title="Publish">
        Modal content
      </SandModal>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
