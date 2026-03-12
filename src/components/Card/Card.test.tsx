import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandCard } from './Card';

describe('SandCard', () => {
  it('renders semantic header and footer content', () => {
    render(
      <SandCard header="Header" footer="Footer">
        Body
      </SandCard>,
    );

    expect(screen.getByRole('article')).toBeVisible();
    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByText('Footer')).toBeVisible();
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandCard>Body</SandCard>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
