import * as React from 'react';
import {LegalAdvice} from './LegalAdvice';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'LegalAdvice',
  decorators: [withA11y],
};

export const withText = () => <LegalAdvice />;
