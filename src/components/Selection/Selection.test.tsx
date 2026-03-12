import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SandCheckbox, SandChoiceGroup, SandRadio, SandSwitch } from './Selection';

describe('SandSelection', () => {
  it('supports keyboard interaction for grouped controls', async () => {
    const user = userEvent.setup();

    render(
      <SandChoiceGroup label="Selection">
        <SandCheckbox label="Email alerts" />
        <SandRadio name="env" label="Production" />
        <SandRadio name="env" label="Staging" />
        <SandSwitch label="Maintenance mode" />
      </SandChoiceGroup>,
    );

    const checkbox = screen.getByRole('checkbox', { name: 'Email alerts' });
    const production = screen.getByRole('radio', { name: 'Production' });
    const staging = screen.getByRole('radio', { name: 'Staging' });
    const toggle = screen.getByRole('switch', { name: 'Maintenance mode' });

    checkbox.focus();
    await user.keyboard(' ');
    production.focus();
    await user.keyboard(' ');
    production.focus();
    await user.keyboard('{ArrowRight}');
    toggle.focus();
    await user.keyboard(' ');

    expect(checkbox).toBeChecked();
    expect(staging).toBeChecked();
    expect(toggle).toBeChecked();
  });

  it('matches the default snapshot', () => {
    const { container } = render(
      <SandChoiceGroup label="Selection">
        <SandCheckbox label="Email alerts" />
      </SandChoiceGroup>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
