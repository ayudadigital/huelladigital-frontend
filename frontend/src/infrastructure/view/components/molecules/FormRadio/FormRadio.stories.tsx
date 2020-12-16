import * as React from 'react';
import { FormRadio } from './FormRadio';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'FormRadio',
  decorators: [withA11y],
};

export const withText = () => (
  <FormRadio type={'radio'} name={'Ubicación'} title={'Ubicación'} />
);
