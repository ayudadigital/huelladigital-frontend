import * as React from 'react';
import { FormRegisterContactPerson } from './FormRegisterContactPerson';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organisms | Forms',
  decorators: [withA11y],
};

export const ContactPerson = () => <FormRegisterContactPerson />;
