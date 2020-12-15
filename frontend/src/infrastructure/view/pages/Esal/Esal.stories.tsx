import * as React from 'react';
import {Esal} from './Esal';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Esal',
  decorators: [withA11y],
};

export const withText = () => <Esal />;
