import * as React from 'react';
import {FormRegisterEsal} from './FormRegisterEsal';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'FormRegisterEsal',
  decorators: [withA11y],
};

export const withText = () => <FormRegisterEsal />;
