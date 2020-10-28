import * as React from 'react';
import {LogoutButton} from './LogoutButton';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'LogoutButton',
  decorators: [withA11y],
};

export const withText = () => <LogoutButton />;
