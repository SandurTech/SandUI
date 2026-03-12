import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SandCodeBlock, SandCodeTabs } from './CodeBlock';

describe('SandCodeBlock', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('copies content to the clipboard', async () => {
    const user = userEvent.setup();
    render(<SandCodeBlock code={'const a = 1;'} />);

    await user.click(screen.getByRole('button', { name: 'Copy code to clipboard' }));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Code copied to clipboard' })).toBeVisible());
  });

  it('supports arrow-key tab navigation', async () => {
    const user = userEvent.setup();

    render(
      <SandCodeTabs
        tabs={[
          { name: 'TS', code: 'const a = 1;' },
          { name: 'CSS', code: '.root {}' },
        ]}
      />,
    );

    const firstTab = screen.getByRole('tab', { name: 'TS' });
    firstTab.focus();
    await user.keyboard('{ArrowRight}');

    expect(screen.getByRole('tab', { name: 'CSS' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('.root {}')).toBeVisible();
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandCodeBlock code="const a = 1;" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
