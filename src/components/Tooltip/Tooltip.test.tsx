import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandTooltip } from './Tooltip';

describe('SandTooltip', () => {
  it('shows tooltip content on hover', async () => {
    render(
      <SandTooltip content="Helper text">
        <button>Trigger</button>
      </SandTooltip>
    );

    fireEvent.mouseEnter(screen.getByText('Trigger'));
    expect(screen.getByText('Helper text')).toBeDefined();
  });
});
