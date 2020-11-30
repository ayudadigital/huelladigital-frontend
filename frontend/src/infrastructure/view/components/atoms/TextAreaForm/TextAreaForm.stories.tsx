import * as React from 'react';
import {TextAreaForm} from './TextAreaForm';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'TextAreaForm',
  decorators: [withA11y],
};

export const withText = () => <TextAreaForm />;
