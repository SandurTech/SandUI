import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandSnackbar, SandToast } from './Feedback';

describe('SandFeedback', () => {
  it('uses status semantics for non-error feedback', () => {
    render(<SandToast heading="Saved" message="Changes stored." />);
    expect(screen.getByRole('status')).toBeVisible();
  });

  it('uses alert semantics for failed feedback', () => {
    render(<SandSnackbar variant="failed" message="Request failed." />);
    expect(screen.getByRole('alert')).toBeVisible();
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandToast message="Saved." />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
