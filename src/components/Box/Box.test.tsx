import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandBox } from './Box';

describe('SandBox', () => {
  it('renders as a custom tag', () => {
    const { container } = render(<SandBox as="section">Content</SandBox>);
    expect(container.querySelector('section')).toBeDefined();
  });

  it('applies surface and padding styles', () => {
    const { container } = render(<SandBox surface padding="lg">Content</SandBox>);
    expect(container.firstChild).toBeDefined();
  });
});
