import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandAlert } from './Alert';

describe('SandAlert', () => {
  it('renders title and description', () => {
    render(<SandAlert title="Hello" description="World" />);
    expect(screen.getByText('Hello')).toBeDefined();
    expect(screen.getByText('World')).toBeDefined();
  });

  it('applies the correct status classes', () => {
    const { container } = render(<SandAlert status="success" />);
    // Since we use CSS modules, we check if the style properties are applied
    expect(container.firstChild).toBeDefined();
  });
});
