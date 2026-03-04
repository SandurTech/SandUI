import React from 'react';
import SandToast from './Toast';

export default {
  title: '03. Molecules/SandToast',
  component: SandToast,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    message: { control: 'text' },
    duration: { control: 'number' },
  },
};

export const Info = { args: { variant: 'info', message: 'Build completed successfully.', duration: 0 } };
export const Success = { args: { variant: 'success', message: 'File saved.', duration: 0 } };
export const Warning = { args: { variant: 'warning', message: 'API rate limit approaching.', duration: 0 } };
export const Error = { args: { variant: 'error', message: 'Network request failed.', duration: 0 } };

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '440px' }}>
      <SandToast variant="info" message="Informational message." duration={0} />
      <SandToast variant="success" message="Operation completed." duration={0} />
      <SandToast variant="warning" message="Check your input." duration={0} />
      <SandToast variant="error" message="Something went wrong." duration={0} />
    </div>
  ),
};
