import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandIcon } from './Icon';

describe('SandIcon', () => {
  it('renders a material symbol', () => {
    const { container } = render(<SandIcon icon="settings" />);
    const span = container.querySelector('.material-symbols-rounded');
    expect(span).toBeDefined();
    expect(span?.textContent).toBe('settings');
  });
});
