import { create } from '@storybook/theming/create';

const shared = {
  brandTitle: 'SandurTech | SandUI',
  brandUrl: 'https://sandurtech.vercel.app/',
  brandTarget: '_blank',
  fontBase: '"Inter", system-ui, -apple-system, sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',
  colorPrimary: 'orange',
  appBorderRadius: 8,
  inputBorderRadius: 6,
};

export const sandLight = create({
  ...shared,
  base: 'light',

  colorSecondary: 'orange', // Active/selected states

  appBg: '#F2F2F2',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(38, 38, 38, 0.12)',

  textColor: '#262626',
  textInverseColor: '#FFFFFF',
  textMutedColor: 'rgba(38, 38, 38, 0.65)',

  barTextColor: 'rgba(38, 38, 38, 0.65)',
  barSelectedColor: 'orange',
  barHoverColor: '#262626',
  barBg: '#FFFFFF',

  inputBg: '#FFFFFF',
  inputBorder: 'rgba(38, 38, 38, 0.12)',
  inputTextColor: '#262626',
});

export const sandDark = create({
  ...shared,
  base: 'dark',

  colorSecondary: 'orange',

  appBg: '#111111',
  appContentBg: '#262626',
  appBorderColor: 'rgba(255, 255, 255, 0.1)',

  textColor: '#FFFFFF',
  textInverseColor: '#262626',
  textMutedColor: 'rgba(255, 255, 255, 0.6)',

  barTextColor: 'rgba(255, 255, 255, 0.6)',
  barSelectedColor: 'orange',
  barHoverColor: '#FFFFFF',
  barBg: '#262626',

  inputBg: 'rgba(0, 0, 0, 0.2)',
  inputBorder: 'rgba(255, 255, 255, 0.1)',
  inputTextColor: '#FFFFFF',
});

export default sandLight;
