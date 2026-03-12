import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandLoader, SandSkeleton } from './Loader';

describe('Loader & Skeleton', () => {
  it('renders SandLoader', () => {
    const { container } = render(<SandLoader />);
    expect(container.firstChild).toBeDefined();
  });

  it('renders SandSkeleton', () => {
    const { container } = render(<SandSkeleton />);
    expect(container.firstChild).toBeDefined();
  });
});
