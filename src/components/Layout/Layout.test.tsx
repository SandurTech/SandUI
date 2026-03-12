import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandContainer, SandHeader, SandToolLayout, SandToolPanel, SandResultPanel } from './Layout';

describe('Layout Components', () => {
  it('renders all layout primitives', () => {
    render(
      <SandContainer>
        <SandHeader>Header</SandHeader>
        <SandToolLayout>
          <SandToolPanel>Panel</SandToolPanel>
          <SandResultPanel>Result</SandResultPanel>
        </SandToolLayout>
      </SandContainer>
    );
    expect(screen.getByText('Header')).toBeDefined();
    expect(screen.getByText('Panel')).toBeDefined();
    expect(screen.getByText('Result')).toBeDefined();
  });
});
