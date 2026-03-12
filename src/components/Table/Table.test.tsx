import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandTable } from './Table';

describe('SandTable', () => {
  it('renders table content', () => {
    render(
      <SandTable>
        <thead>
          <tr><th>Name</th></tr>
        </thead>
        <tbody>
          <tr><td>Item 1</td></tr>
        </tbody>
      </SandTable>
    );
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByText('Item 1')).toBeDefined();
  });
});
