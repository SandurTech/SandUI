import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandTitle, SandText, SandCode } from './Typography';

describe('Typography', () => {
  it('renders SandTitle at different levels', () => {
    const { container: h1 } = render(<SandTitle level={1}>H1</SandTitle>);
    expect(h1.querySelector('h1')).toBeDefined();
    
    const { container: h3 } = render(<SandTitle level={3}>H3</SandTitle>);
    expect(h3.querySelector('h3')).toBeDefined();
  });

  it('renders SandText with props', () => {
    render(<SandText muted>Muted Text</SandText>);
    expect(screen.getByText('Muted Text')).toBeDefined();
  });

  it('renders SandCode inline and block', () => {
    const { container: inline } = render(<SandCode>inline</SandCode>);
    expect(inline.querySelector('code')).toBeDefined();

    const { container: block } = render(<SandCode block>block</SandCode>);
    expect(block.querySelector('pre')).toBeDefined();
  });
});
