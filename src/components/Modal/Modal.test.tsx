import { render, screen } from '@testing-library/react';
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
    expect(screen.getAllByRole('button', { name: 'Close dialog' })[1]).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
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
