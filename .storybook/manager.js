import { addons } from '@storybook/manager-api';
import { sandDark } from './theme';

addons.setConfig({
  theme: sandDark,
  sidebar: {
    showRoots: true,
  },
});
