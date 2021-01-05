import * as React from 'react';
import {MixFormRegisterEsal} from './MixFormRegisterEsal';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'MixFormRegisterEsal',
  decorators: [withA11y],
};

export const withText = () => <MixFormRegisterEsal />;
