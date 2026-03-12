import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandGrid } from './Grid';

describe('SandGrid', () => {
  it('renders grid items', () => {
    const { container } = render(
      <SandGrid columns={3}>
        <SandGrid.Item span={2}>Left</SandGrid.Item>
        <SandGrid.Item>Right</SandGrid.Item>
      </SandGrid>
    );
    expect(container.firstChild).toBeDefined();
  });
});
