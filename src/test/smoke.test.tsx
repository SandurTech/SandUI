import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import * as SandUI from '../index';

describe('publishable API smoke tests', () => {
  it('ensures all expected components are exported', () => {
    const components = [
      'SandAccordion',
      'SandAlert',
      'SandAppLayout',
      'SandAvatar',
      'SandAvatarGroup',
      'SandBadge',
      'SandBreadcrumbs',
      'SandBox',
      'SandButton',
      'SandCard',
      'SandCheckbox',
      'SandChoiceGroup',
      'SandCode',
      'SandCodeBlock',
      'SandCodeTabs',
      'SandContainer',
      'SandChip',
      'SandTag',
      'SandDialog',
      'SandDrawer',
      'SandDivider',
      'SandFormGroup',
      'SandGrid',
      'SandIcon',
      'SandInput',
      'SandInputGroup',
      'SandKBD',
      'SandLoader',
      'SandMicroserviceLayout',
      'SandModal',
      'SandNavbar',
      'SandPagination',
      'SandPopover',
      'SandProgress',
      'SandRadio',
      'SandSkeleton',
      'SandSlider',
      'SandSelect',
      'SandSnackbar',
      'SandStack',
      'SandSwitch',
      'SandTable',
      'SandTabs',
      'SandText',
      'SandTextarea',
      'SandThemeProvider',
      'SandTitle',
      'SandToast',
      'SandToolLayout',
      'SandTooltip',
    ];

    components.forEach(name => {
      if (!(name in SandUI)) {
        throw new Error(`Component ${name} is missing from exports!`);
      }
      if ((SandUI as any)[name] === undefined) {
        throw new Error(`Component ${name} is exported but undefined!`);
      }
    });
  });

  it('renders a set of components without crashing', () => {
    render(
      <SandUI.SandThemeProvider>
        <>
        <SandUI.SandAlert status="success" title="Ready" description="System is stable." />
        <SandUI.SandAccordion items={[{ id: 'one', title: 'Section', content: 'Accordion body' }]} />
        <SandUI.SandAvatar name="Amogha Raj" />
        <SandUI.SandBadge>Stable</SandUI.SandBadge>
        <SandUI.SandButton>Deploy</SandUI.SandButton>
        <SandUI.SandBox surface padding="md">Box</SandUI.SandBox>
        <SandUI.SandContainer>Container</SandUI.SandContainer>
        <SandUI.SandDivider />
        <SandUI.SandIcon icon="settings" />
        <SandUI.SandInputGroup label="Name" />
        <SandUI.SandProgress value={48} />
        <SandUI.SandStack direction="row"><span>One</span></SandUI.SandStack>
        <SandUI.SandTable items={[{ id: 1, val: 'A' }]} />
        <SandUI.SandTabs items={[{ id: 'a', label: 'A', content: '...' }]} />
        <SandUI.SandTitle level={2}>Title</SandUI.SandTitle>
        <SandUI.SandText>Body copy</SandUI.SandText>
        <SandUI.SandTooltip content="Hint"><button type="button">H</button></SandUI.SandTooltip>
        </>
      </SandUI.SandThemeProvider>,
    );

    expect(screen.getByText('Stable')).toBeDefined();
  });
});
