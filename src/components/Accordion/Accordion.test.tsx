import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, expect, it, afterEach } from 'vitest';
import { SandAccordion } from './Accordion';

describe('SandAccordion', () => {
  afterEach(cleanup);

  const items = [
    { id: '1', title: 'Item 1', content: 'Content 1' },
    { id: '2', title: 'Item 2', content: 'Content 2' },
  ];

  it('renders all items and toggles content visibility', () => {
    render(<SandAccordion items={items} />);

    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();

    // Content container should not have open class initially
    const content1 = screen.getByText('Content 1').parentElement;
    expect(content1?.className).not.toContain('contentOpen');

    // Click to open
    fireEvent.click(screen.getByText('Item 1'));
    expect(content1?.className).toContain('contentOpen');

    // Click another to switch
    fireEvent.click(screen.getByText('Item 2'));
    const content2 = screen.getByText('Content 2').parentElement;
    expect(content2?.className).toContain('contentOpen');
    expect(content1?.className).not.toContain('contentOpen');
  });

  it('renders with an item open by default', () => {
    render(<SandAccordion items={items} defaultOpen="2" />);
    const content2 = screen.getByText('Content 2').parentElement;
    expect(content2?.className).toContain('contentOpen');
  });
});
