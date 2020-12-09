import * as React from 'react';
import { TextAreaForm } from './TextAreaForm';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Atom | TextAreaForm',
  decorators: [withA11y],
};

export const withText = () => <TextAreaForm text="" placeholder="Text area" />;
