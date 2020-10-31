import * as React from 'react';
import { OrganizationRegister } from './OrganizationRegister';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organization | OrganizationRegister',
  decorators: [withA11y],
};

export const withText = () => <OrganizationRegister />;
