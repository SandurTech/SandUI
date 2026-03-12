import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandBreadcrumbs } from './Breadcrumbs';

describe('SandBreadcrumbs', () => {
  it('renders a semantic breadcrumb trail', () => {
    render(
      <SandBreadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/components' },
          { label: 'Buttons' },
        ]}
      />,
    );

    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeVisible();
    expect(screen.getByText('Buttons')).toHaveAttribute('aria-current', 'page');
  });

  it('matches the default snapshot', () => {
    const { container } = render(<SandBreadcrumbs items={[{ label: 'Home' }]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
