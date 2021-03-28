import * as React from 'react';
import {FormRegisterContactPerson} from './FormRegisterContactPerson';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'FormRegisterContactPerson',
  decorators: [withA11y],
};

export const withText = () => <FormRegisterContactPerson />;
