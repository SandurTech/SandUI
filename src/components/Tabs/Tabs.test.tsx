import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandTabs } from './Tabs';

describe('SandTabs', () => {
  const items = [
    { id: '1', label: 'Tab 1', content: 'Content 1' },
    { id: '2', label: 'Tab 2', content: 'Content 2' },
  ];

  it('switches content when clicking tabs', () => {
    render(<SandTabs items={items} />);

    expect(screen.getByText('Content 1')).toBeDefined();
    
    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content 2')).toBeDefined();
  });
});
