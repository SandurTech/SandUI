import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandKBD } from './Kbd';

describe('SandKBD', () => {
  it('matches the default snapshot', () => {
    const { container } = render(<SandKBD>Cmd</SandKBD>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
