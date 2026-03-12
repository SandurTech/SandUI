import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandStack } from './Stack';

describe('SandStack', () => {
  it('renders children in a stack', () => {
    render(
      <SandStack gap="lg">
        <span>Item 1</span>
        <span>Item 2</span>
      </SandStack>
    );
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
  });
});
