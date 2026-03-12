import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SandHeader, SandMicroserviceLayout, SandResultPanel, SandToolPanel } from './Layout';

describe('SandLayout', () => {
  it('renders the composed layout shell', () => {
    render(
      <SandMicroserviceLayout
        header={<SandHeader>Header</SandHeader>}
        panel={<SandToolPanel>Panel</SandToolPanel>}
        result={<SandResultPanel>Result</SandResultPanel>}
      />,
    );

    expect(screen.getByText('Header')).toBeVisible();
    expect(screen.getByText('Panel')).toBeVisible();
    expect(screen.getByText('Result')).toBeVisible();
  });

  it('matches the default snapshot', () => {
    const { container } = render(
      <SandMicroserviceLayout
        header={<SandHeader>Header</SandHeader>}
        panel={<SandToolPanel>Panel</SandToolPanel>}
        result={<SandResultPanel>Result</SandResultPanel>}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
