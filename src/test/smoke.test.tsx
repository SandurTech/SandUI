import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  SandAccordion,
  SandAlert,
  SandBadge,
  SandBreadcrumbs,
  SandBox,
  SandButton,
  SandCard,
  SandCheckbox,
  SandChoiceGroup,
  SandCode,
  SandCodeBlock,
  SandCodeTabs,
  SandContainer,
  SandDrawer,
  SandDivider,
  SandFormGroup,
  SandGrid,
  SandIcon,
  SandInput,
  SandInputGroup,
  SandKBD,
  SandLoader,
  SandModal,
  SandNavbar,
  SandPagination,
  SandProgress,
  SandRadio,
  SandResultPanel,
  SandSkeleton,
  SandSnackbar,
  SandStack,
  SandSwitch,
  SandTable,
  SandTabs,
  SandText,
  SandThemeProvider,
  SandTitle,
  SandToast,
  SandToolLayout,
  SandToolPanel,
  SandTooltip,
} from '../index';

describe('publishable API smoke tests', () => {
  it('renders every exported component without crashing', () => {
    render(
      <SandThemeProvider>
        <>
        <SandAlert status="success" title="Ready" description="System is stable." />
        <SandAccordion items={[{ id: 'one', title: 'Section', content: 'Accordion body' }]} />
        <SandBadge>Stable</SandBadge>
        <SandBreadcrumbs items={[{ label: 'Home' }, { label: 'Docs' }]} />
        <SandBox surface padding="md">Box</SandBox>
        <SandButton>Deploy</SandButton>
        <SandCard header="Header" footer="Footer">
          Card body
        </SandCard>
        <SandCode>npm run build</SandCode>
        <SandCodeBlock code="const answer = 42;" />
        <SandCodeTabs
          tabs={[
            { label: 'TypeScript', code: 'const answer = 42;' },
            { label: 'JavaScript', code: 'const answer = 42;' },
          ]}
        />
        <SandContainer>Container</SandContainer>
        <SandDrawer open={false} onClose={() => {}} />
        <SandDivider />
        <SandFormGroup label="Email">
          <SandInput aria-label="Standalone input" />
        </SandFormGroup>
        <SandGrid columns={{ sm: 1, md: 2 }}>
          <SandGrid.Item span={{ md: 2 }}>Grid Item</SandGrid.Item>
        </SandGrid>
        <SandIcon icon="settings" aria-label="Icon preview" />
        <SandInputGroup label="Name" helperText="Required" />
        <SandKBD>Cmd</SandKBD>
        <SandLoader />
        <SandToolLayout>
          <SandToolPanel>Panel</SandToolPanel>
          <SandResultPanel>Result</SandResultPanel>
        </SandToolLayout>
        <SandNavbar brand="SandUI" items={[{ label: 'Docs', href: '#', active: true }]} />
        <SandModal open onClose={() => {}} title="Publish">
          Modal body
        </SandModal>
        <SandPagination currentPage={1} totalPages={3} />
        <SandProgress value={48} showValue />
        <SandChoiceGroup label="Preferences">
          <SandCheckbox label="Email alerts" />
          <SandRadio name="environment" label="Production" />
          <SandSwitch label="Maintenance mode" />
        </SandChoiceGroup>
        <SandSkeleton height={24} />
        <SandStack direction="row">
          <span>One</span>
          <span>Two</span>
        </SandStack>
        <SandTable>
          <thead>
            <tr><th>Name</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>API</td><td>Healthy</td></tr>
          </tbody>
        </SandTable>
        <SandTabs items={[{ id: 'a', label: 'Overview', content: 'Tab content' }]} />
        <SandTitle level={2}>Title</SandTitle>
        <SandText>Body copy</SandText>
        <SandToast heading="Saved" message="Changes stored." />
        <SandSnackbar message="Saved." />
        <SandTooltip content="Helpful hint">
          <button type="button">Hover me</button>
        </SandTooltip>
        </>
      </SandThemeProvider>,
    );

    expect(screen.getByRole('button', { name: 'Deploy' })).toBeVisible();
    expect(screen.getByRole('dialog', { name: 'Publish' })).toBeVisible();
    expect(screen.getByText('Stable')).toBeVisible();
  }, 15000);
});
