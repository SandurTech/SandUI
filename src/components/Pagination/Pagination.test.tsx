import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SandPagination } from './Pagination';

describe('SandPagination', () => {
  it('supports click and arrow-key pagination requests', async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(<SandPagination currentPage={2} totalPages={4} onPageChange={onPageChange} />);

    await user.click(screen.getByRole('button', { name: 'Page 3' }));
    const nav = screen.getByRole('navigation', { name: 'Pagination' });
    nav.focus();
    await user.keyboard('{ArrowLeft}');

    expect(onPageChange).toHaveBeenNthCalledWith(1, 3);
    expect(onPageChange).toHaveBeenNthCalledWith(2, 1);
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandPagination currentPage={1} totalPages={3} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
